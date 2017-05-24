import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  navs = [];
  constructor() {    
  }

  ngOnInit() {
    this.navs = [
      {
        "name": 'SETTING',
        "profile": './assets/RealShadow_flight.png',
      },
      {
        "name": 'SHOPPING',
        "profile": './assets/SnowMan.jpg',
      },
      {
        "name": 'CART',
        "profile": './assets/Stamen.jpg',
      },
    ]
  }

}
