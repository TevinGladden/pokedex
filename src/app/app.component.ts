import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  party = [];
  storage = [];
  bag = [];
  number = "";
  pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
  response: any;
  
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  //   let obs = this.http.get(this.pokeUrl);
  //   obs.subscribe((response) => console.log(response)); //observable acquisition
  //
    this.search()
  }

  search() {
    if(this.number){
      this.http.get(this.pokeUrl+this.number)
    .subscribe((response) => {
      this.response = response;
      this.storage.push(this.response);
      console.log(this.response);
    })
    }
    
  }
  createParty() {
    this.http.get(this.pokeUrl+this.number)
    .subscribe((response) => {
      this.storage.push(response);
      console.log(this.storage);
    })
  }
}
