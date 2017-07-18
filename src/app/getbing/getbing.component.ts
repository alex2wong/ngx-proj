import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable, Operator } from "rxjs";

@Component({
  selector: 'app-getbing',
  templateUrl: './getbing.component.html',
  styleUrls: ['./getbing.component.css']
})

@Injectable()
export class GetbingComponent implements OnInit {
  reqOption: any;
  constructor(private http: Http) { }

  ngOnInit() {
    
  }

  getBingImage(): Observable<bingRes> {
    // return Observable. map is one of operator..
    return this.http.get("https://111.231.11.20:3003/proxy?proxyURI=http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1")
      .map((r: Response) => {
        return r.json().images;
      });
  }
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
