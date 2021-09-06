import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pokemon, PokemonRequest } from "../models/pokemon.model";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private _pokemons: Pokemon[] = [];
    private _error: string = '';

    constructor(private readonly http: HttpClient, private readonly userService: UserService) 
    {
    }

    public error(): string {
        return this._error;
    }

    public pokemons(): Pokemon[] {
        return this._pokemons;
    }

    public selectPokemon(id: string)
    {
        var p = this._pokemons.filter(x => x.id === id);

        if (p.length === 1) {
            p[0].selected = true;

            this.savePokemons();
        }
    }

    public fetchPokemons(): void {
        this.http.get<PokemonRequest>('https://pokeapi.co/api/v2/pokemon?limit=100')
        .subscribe((pokemonRequest: PokemonRequest) => {
            this._pokemons = pokemonRequest.results;
            this._pokemons.forEach(element => {
                element.name = element.name[0].toUpperCase() + element.name.substr(1); // capitilize first character
                element.id = element.url.substr(34, element.url.length-35); // extract ID from URL
            });
        },
        (error: HttpErrorResponse) => {
            this._error = error.message;
        });
    }

    public savePokemons() {
          localStorage.setItem("pokemon-list["+this.userService.Username+"]", 
            JSON.stringify(this._pokemons));
    }

    public loadPokemons()
    {
        let listString = localStorage.getItem("pokemon-list["+this.userService.Username+"]");

        if (listString !== null) {
            this._pokemons = JSON.parse(listString);
        } else {
            this.fetchPokemons();

        }
    }

    public clearPokemons()
    {
        this._pokemons.length = 0;
    }

}