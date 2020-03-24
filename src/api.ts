import { Pokedex, RootEndpointConfig, NamedApiResourceList, ApiResourceList } from 'pokeapi-js-wrapper';
import { useState, useMemo, useEffect } from 'react';

const P = new Pokedex();

type PokeApiCallback<T> = (p: Pokedex) => Promise<T>;

export interface PendingResult {
    type: 'pending';
}

export interface ErrorResult {
    type: 'error';
    reason: any;
}

export interface SuccessResult<T> {
    type: 'success';
    data: T;
}

export type Result<T> = PendingResult | ErrorResult | SuccessResult<T>;

export function usePokeApi<T>(callback: PokeApiCallback<T>): Result<T> {
    const [result, setResult] = useState<Result<T>>({ type: 'pending' });
    useMemo(() => {
        callback(P).then(data => {
            setResult({
                type: 'success',
                data
            });
        }, error => {
            setResult({
                type: 'error',
                reason: error
            });
        })
    }, []);
    return result;
}

type PaginatedPokeApiCallback<T> = (p: Pokedex, options: RootEndpointConfig) => Promise<T>;

export function usePokeApiPaginated<T extends NamedApiResourceList | ApiResourceList>(callback: PaginatedPokeApiCallback<T>, chunkSize: number): [Result<T>, () => void] {
    const [options, setOptions] = useState<RootEndpointConfig>({ offset: 0, limit: chunkSize });
    const [result, setResult] = useState<Result<T>>({ type: 'pending' });
    useEffect(() => {
        callback(P, options).then(data => {
            setResult(r => ({
                type: 'success',
                data: 'data' in r ? { ...data, results: r.data.results.concat(data.results as any) } : data
            }));
        }, error => {
            setResult({
                type: 'error',
                reason: error
            });
        })
    }, [options]);
    return [result, () => {
        setOptions(o => ({
            offset: o.offset!! + chunkSize,
            limit: chunkSize
        }));
    }];
}