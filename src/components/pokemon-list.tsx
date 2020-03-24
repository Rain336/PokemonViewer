import React, { useEffect } from 'react';
import styled from '@emotion/styled/macro';
import debounce from 'lodash.debounce';
import { PokemonListItem } from './pokemon-list-item';
import { usePokeApi, usePokeApiPaginated } from '../api';

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
grid-gap: 0.5rem;
margin-top: 0.5rem;
`;

export function PokemonList() {
    const [result, fetchNext] = usePokeApiPaginated((p, options) => p.getPokemonsList(options), 35);
    useEffect(() => {
        window.onscroll = debounce(function() {
            if(document.documentElement.offsetHeight - window.innerHeight - document.documentElement.scrollTop <= 150) {
                fetchNext();
            }
        }, 100);

        return () => {
            window.onscroll = null;
        };
    }, []);

    switch (result.type) {
        case 'pending':
            return <div>Loading...</div>

        case 'error':
            return <div>{`Error: ${result.reason}`}</div>

        case 'success':
            return <Grid>
                {result.data.results.map(p => <PokemonListItem pokemon={p} key={p.name} />)}
            </Grid>
    }
}