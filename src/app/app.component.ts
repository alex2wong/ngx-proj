import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'select AddrObj';
  addrObjs = [];
  constructor(){
    // random many addrObj
    for(let i=0;i<25600;i++) {
      let addrObj = <AddrObj>{};
      addrObj.name = i + " addrObj",
      this.addrObjs.push(addrObj);
    }
  }
}


interface AddrObj {
    name: string;
    ipv4: string;
    type: string;
}
