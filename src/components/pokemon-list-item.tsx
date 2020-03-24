import React from 'react';
import styled from '@emotion/styled/macro';
import { NamedApiResource } from 'pokeapi-js-wrapper';
import { usePokeApi } from '../api';
import { extractId } from '../utils';

interface Props {
    pokemon: NamedApiResource
}

const Shadow = styled.div`
padding: 0.25rem;
position: relative;
cursor: pointer;
&::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}
&:hover::before {
  opacity: 1;
}
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

function fixName(name: string) {
    return name.charAt(0).toUpperCase() + name.substring(1)
}

export function PokemonListItem({ pokemon }: React.PropsWithChildren<Props>) {
    const result = usePokeApi(p => p.getPokemonByName(extractId(pokemon.url)));

    switch (result.type) {
        case 'pending':
            return <div>Loading...</div>

        case 'error':
            return <div>{`Error: ${result.reason}`}</div>

        case 'success':
            return <Shadow>
                <Wrapper>
                    <img width="192" height="192" src={result.data.sprites.front_default || ''} alt={pokemon.name} />
                    <div>{fixName(pokemon.name)}</div>
                </Wrapper>
            </Shadow>
    }
}