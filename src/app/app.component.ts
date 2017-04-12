import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  addrObjs = [];
  aoIndex = 0;
  constructor(){
    // random many addrObj
    for(let i=0;i<10000;i++) {
      this.addrObjs.push({
        name: this.aoIndex++ + " addrObj",
      })
    }
  }
  // addrObjs = [
  //   {
  //     name:"x1 addrObj",
  //   },
  //   {
  //     name:"x2 addrObj",
  //   },
  //   {
  //     name:"x3 addrObj",
  //   },
  //   {
  //     name:"x4 addrObj",
  //   },
  //   {
  //     name:"x5 addrObj",
  //   },
  //   {
  //     name:"x6 addrObj",
  //   },
  //   {
  //     name:"x7 addrObj",
  //   },
  //   {
  //     name:"x8 addrObj",
  //   },
  //   {
  //     name:"x9 addrObj",
  //   },
  // ];
}
