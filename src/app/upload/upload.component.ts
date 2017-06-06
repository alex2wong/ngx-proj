import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  // this Component only upload File(using form method). got response in __blank
  compressImg: boolean = true;
  fileloaded: any;
  form: any;
  inputEle: any;
  actionURL: string;
  constructor() { }

  ngOnInit() {
    this.fileloaded = {
      name: "",
      type: "",
      size: "",
    }    
    this.actionURL = "http://127.0.0.1:8000/upload";  
  }

  // upload img file..
  upload(evt) {
    console.warn("file Changed..");
    let $ele = evt.target;
    if (($ele.files.length) > 0 && (/image\/\w+/.test($ele.files[0].type))) {
      this.fileloaded = $ele.files[0];
      let reader = new FileReader();
      reader.onload = function(result: ProgressEvent) {
        let inputEle: HTMLInputElement = <HTMLInputElement>document.querySelector('#file2upload');
        inputEle.style.backgroundImage = "url(" + reader.result + ")";
      }
      reader.readAsDataURL(this.fileloaded);
    } else {
      alert("请选择图片文件");
      this.fileloaded = {
        name: "",
        type: "",
        size: "",
      }
    }
  }

  // submit the img to server..
  submit(evt) {
    // server path: http://111.231.11.20:3000/upload/
    console.warn("uploading to " + this.actionURL + " , compressed:" +　this.compressImg);
    this.form = document.querySelector('#imageForm'); 
    
    this.form.submit();
  }
}
