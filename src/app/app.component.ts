import { Component } from '@angular/core';
import { MdDialog, MdCheckbox } from '@angular/material';
import { GetbingComponent } from "./getbing/getbing.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetbingComponent],
})
export class AppComponent {
  title = 'select AddrObj';
  bigImages: Observable<bingRes>;
  bingPrefix = "http://www.bing.com";
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
  constructor(private dataService: GetbingComponent){
    // random many addrObj
    for(let i=0;i<25600;i++) {
      let addrObj = <AddrObj>{};
      addrObj.name = "AddrObj" + (Math.random()*30000).toFixed(0);
      this.addrObjs.push(addrObj);
    }

    // images is Observable.. can be aync to {images}
    this.bigImages = dataService.getBingImage();
      // .toPromise()
      // .then(res => {
      //   if (res.url) {
      //     // set image src.
      //   }
      // })
  }

  toggleprofile() {
    //
  }

  // receive reader.result from upload component.
  previewImage(evt: Event) {
      let imgContainer = document.createElement("div"),
          imgSource = <HTMLInputElement>document.querySelector("#file2upload"),
          tileContainer = <HTMLDivElement>document.querySelector("#tileContainer");
      imgContainer.style.backgroundImage = imgSource.style.backgroundImage;
      imgContainer.style.height = "250px";
      tileContainer.insertBefore(imgContainer, tileContainer.children[1]);
      imgContainer.className = "pure-u-1 pure-u-md-1-2 pure-u-xl-1-3";
      imgContainer.style.padding = "10px";
      imgContainer.style.marginTop = "5px";
      imgContainer.style.backgroundSize = "contain";
      imgContainer.style.backgroundRepeat = "no-repeat";
  }
}

interface AddrObj {
    name: string;
    ipv4: string;
    type: string;
}

interface bingRes { 
  "images": Array<imgObject>;
}

interface imgObject {
  "startdate": string;
  "fullstartdate": string;
  "enddate": string;
  "url": string;
  "urlbase": string;
  "copyright": string;
}

