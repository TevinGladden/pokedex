import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.css']
})
export class CreatePartyComponent implements OnInit {
  search;
  party = [];
  pokemon: Pokemon;
  pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
  flag = 0

  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {
  }

  toLowerCase(x: string) {
    return (x.charAt(0).toLowerCase() + x.slice(1));
  }

  getDetails(x: string) {
    var p = this.PokemonService.getDetails(this.toLowerCase(x))
        p.then((res) => {
          console.log(res)
          return res
        })
          .then(res => {
            this.pokemon = (res)
            this.party.push((this.pokemon))
          })
        this.flag = 1        
        this.search = ""
  }
}
