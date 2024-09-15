import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  collapsed = true;

  constructor() { }
  
  ngOnInit() {
  }
  
  collapse() {
    this.collapsed = !this.collapsed;
  }
}
