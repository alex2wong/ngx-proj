import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  compressImg: boolean = true;
  fileloaded: any;
  constructor() { }

  ngOnInit() {
    this.fileloaded = {
      name: "",
      type: "",
      size: "",
    }
    
  }

  // upload img file..
  upload(evt) {
    console.warn("file Changed..");
    let $ele = evt.target;
    if (($ele.files.length) > 0) {
      this.fileloaded = $ele.files[0];
    }
  }

  // submit the img to server..
  submit(evt) {
    // server path: http://111.231.11.20:3000/upload/
    console.warn("uploading to http://111.231.11.20:3000/upload/ , compressed:" +　this.compressImg);
    // http.PUT()
  }
}
