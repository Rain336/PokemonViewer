import { Resource, SchemaList, ReadShape } from "rest-hooks";
import { ListResponse, ApiResource } from "./common";

const MISSINGNO_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';

export interface PokemonApiResource extends ApiResource {
    name: string;
}

export interface PokemonSprites {
    readonly front_default: string | null;
    readonly front_shiny: string | null;
    readonly front_female: string | null;
    readonly front_shiny_female: string | null;
    readonly back_default: string | null;
    readonly back_shiny: string | null;
    readonly back_female: string | null;
    readonly back_shiny_female: string | null;
}

export class PokemonResource extends Resource {
    readonly id: number = 0;
    readonly name: string = '';
    readonly base_experience: number = 0;
    readonly height: number = 0;
    readonly weight: number = 0;
    readonly sprites: PokemonSprites | null = null;

    pk() {
        return this.id ? this.id.toString() : undefined;
    }

    findSprite() {
        if(!this.sprites) {
            return MISSINGNO_URL;
        }

        return this.sprites.front_default || MISSINGNO_URL;
    }

    static listShape(): ReadShape<SchemaList<Readonly<ListResponse<PokemonApiResource>>>> {
        const getFetchKey = (params: Readonly<Record<string, string>>) => {
            return 'GET ' + this.listUrl(params);
        };
        const options = this.getFetchOptions();
        return {
            type: 'read',
            schema: [this.asSchema()],
            options,
            getFetchKey,
            fetch: (params: Readonly<Record<string, string | number>>) => {
                return this.fetch('get', this.listUrl(params));
            },
        };
    }

    static urlRoot = 'https://pokeapi.co/api/v2/pokemon/';
}