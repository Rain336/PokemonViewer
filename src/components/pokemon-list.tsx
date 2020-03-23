import React from 'react';
import styled from '@emotion/styled/macro';
import { useResource } from 'rest-hooks';
import { PokemonResource } from '../resources/pokemon-resource';
import { PokemonListItem } from './pokemon-list-item';

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
`;

export function PokemonList() {
    const pokemonList = useResource(PokemonResource.listShape(), {});
    return <Grid>
        {pokemonList.map(p => <PokemonListItem pokemon={p} key={p.name} />)}
    </Grid>
}