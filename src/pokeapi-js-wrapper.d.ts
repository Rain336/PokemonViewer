declare module 'pokeapi-js-wrapper' {
    export interface PokedexConfiguraion {
        protocol?: string;
        hostName?: string;
        versionPath?: string;
        offset?: number;
        limit?: number;
        timeout?: number;
        cache?: boolean;
    }

    export interface RootEndpointConfig {
        offset?: number;
        limit?: number;
    }

    export interface NamedApiResource {
        name: string;
        url: string;
    }

    export interface NamedApiResourceList {
        count: number;
        next: string | null;
        previous: string | null;
        results: NamedApiResource[];
    }

    export interface ApiResource {
        url: string;
    }

    export interface ApiResourceList {
        count: number;
        next: string | null;
        previous: string | null;
        results: ApiResource[];
    }

    export interface PokemonSprites {
        front_default: string | null;
        front_shiny: string | null;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string | null;
        back_shiny: string | null;
        back_female: string | null;
        back_shiny_female: string | null;
    }

    export interface Pokemon {
        id: number;
        name: string;
        base_experience: number;
        height: number;
        is_default: boolean;
        order: number;
        weight: number;
        //abilities: PokemonAbility[];
        forms: NamedApiResource[];
        //game_indices: VersionGameIndex[];
        //held_items: PokemonHeldItem[];
        location_area_encounters: string;
        moves: PokemonMove[];
        sprites: PokemonSprites;
        species: NamedApiResource;
        //stats: PokemonStat[];
        //types: PokemonType[];
    }

    export class Pokedex {
        constructor(config?: PokedexConfiguraion);

        getBerryByName(input: string | number | string[] | number[]): Promise<any>;
        getBerryFirmnessByName(input: string | number | string[] | number[]): Promise<any>;
        getBerryFlavorByName(input: string | number | string[] | number[]): Promise<any>;
        getContestTypeByName(input: string | number | string[] | number[]): Promise<any>;
        getContestEffectById(input: number | number[]): Promise<any>;
        getSuperContestEffectById(input: number | number[]): Promise<any>;
        getEncounterMethodByName(input: string | number | string[] | number[]): Promise<any>;
        getEncounterConditionByName(input: string | number | string[] | number[]): Promise<any>;
        getEncounterConditionValueByName(input: string | number | string[] | number[]): Promise<any>;
        getEvolutionChainById(input: number | number[]): Promise<any>;
        getEvolutionTriggerByName(input: string | number | string[] | number[]): Promise<any>;
        getGenerationByName(input: string | number | string[] | number[]): Promise<any>;
        getPokedexByName(input: string | number | string[] | number[]): Promise<any>;
        getVersionByName(input: string | number | string[] | number[]): Promise<any>;
        getVersionGroupByName(input: string | number | string[] | number[]): Promise<any>;
        getItemByName(input: string | number | string[] | number[]): Promise<any>;
        getItemAttributeByName(input: string | number | string[] | number[]): Promise<any>;
        getItemCategoryByName(input: string | number | string[] | number[]): Promise<any>;
        getItemFlingEffectByName(input: string | number | string[] | number[]): Promise<any>;
        getItemPocketByName(input: string | number | string[] | number[]): Promise<any>;
        getMachineById(input: number | number[]): Promise<any>;
        getMoveByName(input: string | number | string[] | number[]): Promise<any>;
        getMoveAilmentByName(input: string | number | string[] | number[]): Promise<any>;
        getMoveBattleStyleByName(input: string | number | string[] | number[]): Promise<any>;
        getMoveCategoryByName(input: string | number | string[] | number[]): Promise<any>;
        getMoveDamageClassByName(input: string | number | string[] | number[]): Promise<any>;
        getMoveLearnMethodByName(input: string | number | string[] | number[]): Promise<any>;
        getMoveTargetByName(input: string | number | string[] | number[]): Promise<any>;
        getLocationByName(input: string | number | string[] | number[]): Promise<any>;
        getLocationAreaByName(input: string | number | string[] | number[]): Promise<any>;
        getPalParkAreaByName(input: string | number | string[] | number[]): Promise<any>;
        getRegionByName(input: string | number | string[] | number[]): Promise<any>;
        getAbilityByName(input: string | number | string[] | number[]): Promise<any>;
        getCharacteristicById(input: number | number[]): Promise<any>;
        getEggGroupByName(input: string | number | string[] | number[]): Promise<any>;
        getGenderByName(input: string | number | string[] | number[]): Promise<any>;
        getGrowthRateByName(input: string | number | string[] | number[]): Promise<any>;
        getNatureByName(input: string | number | string[] | number[]): Promise<any>;
        getPokeathlonStatByName(input: string | number | string[] | number[]): Promise<any>;
        getPokemonByName(input: string | number | string[] | number[]): Promise<Pokemon>;
        getPokemonColorByName(input: string | number | string[] | number[]): Promise<any>;
        getPokemonFormByName(input: string | number | string[] | number[]): Promise<any>;
        getPokemonHabitatByName(input: string | number | string[] | number[]): Promise<any>;
        getPokemonShapeByName(input: string | number | string[] | number[]): Promise<any>;
        getPokemonSpeciesByName(input: string | number | string[] | number[]): Promise<any>;
        getStatByName(input: string | number | string[] | number[]): Promise<any>;
        getTypeByName(input: string | number | string[] | number[]): Promise<any>;
        getLanguageByName(input: string | number | string[] | number[]): Promise<any>;

        getEndpointsList(config?: RootEndpointConfig): Promise<Record<string, string>>;
        getBerriesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getBerriesFirmnesssList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getBerriesFlavorsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getContestTypesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getContestEffectsList(config?: RootEndpointConfig): Promise<ApiResourceList>;
        getSuperContestEffectsList(config?: RootEndpointConfig): Promise<ApiResourceList>;
        getEncounterMethodsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getEncounterConditionsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getEncounterConditionValuesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getEvolutionChainsList(config?: RootEndpointConfig): Promise<ApiResourceList>;
        getEvolutionTriggersList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getGenerationsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getPokedexsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getVersionsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getVersionGroupsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getItemsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getItemAttributesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getItemCategoriesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getItemFlingEffectsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getItemPocketsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getMachinesList(config?: RootEndpointConfig): Promise<ApiResourceList>;
        getMovesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getMoveAilmentsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getMoveBattleStylesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getMoveCategoriesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getMoveDamageClassesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getMoveLearnMethodsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getMoveTargetsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getLocationsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getLocationAreasList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getPalParkAreasList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getRegionsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getAbilitiesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getCharacteristicsList(config?: RootEndpointConfig): Promise<ApiResourceList>;
        getEggGroupsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getGendersList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getGrowthRatesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getNaturesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getPokeathlonStatsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getPokemonsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getPokemonColorsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getPokemonFormsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getPokemonHabitatsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getPokemonShapesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getPokemonSpeciesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getStatsList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getTypesList(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
        getLanguagesLis(config?: RootEndpointConfig): Promise<NamedApiResourceList>;
    }
}