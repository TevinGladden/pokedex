import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreatePartyComponent } from './create-party/create-party.component';
import { NavComponent } from './nav/nav.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';


const appRoutes: Routes = [
  { path: '', redirectTo: "/poke-search", pathMatch: 'full'},
  { path: 'create-party', component: CreatePartyComponent },
  { path: 'poke-search', component: PokeSearchComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CreatePartyComponent,
    NavComponent,
    PokeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent, NavComponent]
})
export class AppModule { }
