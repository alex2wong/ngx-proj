import { Component } from '@angular/core';
import { MdDialog, MdCheckbox } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'select AddrObj';
  addrObjs = [];
  leftLinks = [
    {
      "name": "项目地址"
    },
    {
      "name": "统计面板"
    },
    {
      "name": "后台管理"
    }
  ];
  constructor(){
    // random many addrObj
    for(let i=0;i<25600;i++) {
      let addrObj = <AddrObj>{};
      addrObj.name = "AddrObj" + (Math.random()*30000).toFixed(0);
      this.addrObjs.push(addrObj);
    }
  }
}

interface AddrObj {
    name: string;
    ipv4: string;
    type: string;
}
