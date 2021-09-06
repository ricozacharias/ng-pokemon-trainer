import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon Trainer';

  constructor(private readonly router: Router,
    private readonly userService: UserService,
    private readonly pokemonService: PokemonService) {
  }

  public onLogoutClick(): void {
    this.userService.saveUsername("");
    this.pokemonService.clearPokemons();
    this.router.navigate(["/login"]);
  }
}
