import React from 'react';
import styled from '@emotion/styled/macro';
import { PokemonResource } from "../resources/pokemon-resource";

interface Props {
    pokemon: Readonly<PokemonResource>
}

const Shadow = styled.div`
padding: 0.25rem;
&::before {
    border-radius: 15px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}
&:hover::after {
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
    return <Shadow>
        <Wrapper>
            <img width="192" height="192" src={pokemon.findSprite()} />
            <div>{fixName(pokemon.name)}</div>
        </Wrapper>
    </Shadow>
}