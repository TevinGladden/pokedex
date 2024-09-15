import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  listPokemon() {
    return this.http.get(`${this.baseUrl}/pokedex/1/`)
      .toPromise()
      .then((res: any) => {
        let pokemons: Pokemon[] = [];
        let reducedPokemonEntries = res.pokemon_entries;
        console.log(res)
        reducedPokemonEntries.forEach((entry) => {
          let pokemon = new Pokemon();
          pokemon.name = entry.pokemon_species.name.charAt(0).toUpperCase() + entry.pokemon_species.name.slice(1);
          pokemon.id = entry.entry_number;

          pokemons.push(pokemon);
        })
        return pokemons;
      })
  }

  getDetails(id: String) {
    return this.http.get(`${this.baseUrl}/pokemon/${id}/`)
      .toPromise()
      .then((res: any) => {
        let response = res;
        let pokemon = new Pokemon();
        pokemon.name = response.name.charAt(0).toUpperCase() + response.name.slice(1);
        pokemon.id = response.id;

        response.types.forEach((type) => {
          pokemon.types.push(type.type.name);
        });

        response.stats.forEach((stat) => {
          pokemon.stats.push({
            name: stat.stat.name,
            value: stat.base_stat
          });
        });

        response.moves.forEach((move) => {
          pokemon.moves.push(move.move.name);
        });


        pokemon.sprite = response.sprites.front_default;
        console.log(pokemon)
        return pokemon;
      });
  }
}

