import React from 'react';
import { CacheProvider } from 'rest-hooks';
import { List } from "./pages/list";

export function App() {
    return <React.StrictMode>
        <CacheProvider>
            <List />
        </CacheProvider>
    </React.StrictMode>
}