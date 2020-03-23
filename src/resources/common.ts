export interface ApiResource {
    readonly url: string;
}

export interface ListResponse<t extends ApiResource = ApiResource> {
    readonly count: number;
    readonly next: string | null;
    readonly previous: string | null;
    readonly results: ApiResource[];
}