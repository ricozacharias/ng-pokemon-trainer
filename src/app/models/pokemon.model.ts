export interface Pokemon {
    name: string;
    url: string;
    id: string;
    selected: boolean;
}

export interface PokemonRequest {
    count: number;
	next: string;
	previous: string;
	results: Pokemon[];
}