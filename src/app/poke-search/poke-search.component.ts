import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent implements OnInit {

  title = 'Pokedex';
  party = [];
  storage = [];
  bag = [];
  number = "";
  pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
  pokeUrl2 = "http://pokeapi.co/api/v2/pokemon?limit=811";
  response: any;
  pokemon: Pokemon;
  pokedex = [];
  flag = 0
  search;

  constructor(private PokemonService: PokemonService) {
  }

  ngOnInit() {
    this.PokemonService.listPokemon()
      .then(res => {
        this.pokedex = res;
      })
  }

  details(x) {
    console.log(x)
  }

  getFlag() {
    return this.flag
  }
  capitalize(x: string) {
    var capitalized = x.charAt(0).toUpperCase() + x.slice(1);
    return capitalized
  }
  toLowerCase(x: string) {
    return x.charAt(0).toLowerCase() + x.slice(1)
  }
  getDetails(x: string) {
    var p = this.PokemonService.getDetails(x)
    p.then((res) => {
      console.log(res)
      return res
    })
      .then(res => {
        this.pokemon = res
      })
    this.flag = 1
  }
}
