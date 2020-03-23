import React from 'react';
import { Container } from '../components/container';
import { SearchBar } from '../components/search-bar';
import { PokemonList } from '../components/pokemon-list';

export function List() {
    return <Container>
        <SearchBar placeholder="Pokemon Name or Dex Number" onSubmit={value => console.log(value)} />
        <React.Suspense fallback={<div>Loading...</div>}>
            <PokemonList />
        </React.Suspense>
    </Container>
}