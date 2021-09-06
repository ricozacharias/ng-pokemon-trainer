import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.css']
})
export class CatalogPage implements OnInit {

  private _pokemons: Pokemon[] = [];
  public username: string = '';
  
  constructor(private readonly router: Router,
    private readonly userService: UserService,
    private pokemonService: PokemonService) {
  }

  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons();
  }

  public onCollectClick(id: string) : void
  {
    this.pokemonService.selectPokemon(id);
  }

  ngOnInit() : void {
    this.username = this.userService.Username;
    this.pokemonService.loadPokemons();
  }
  
}
