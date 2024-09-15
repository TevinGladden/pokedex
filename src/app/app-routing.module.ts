import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { CreatePartyComponent } from './create-party/create-party.component';



const routes: Routes = [
  { path: 'create-party', component: CreatePartyComponent },
  { path: 'poke-search', component: PokeSearchComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
