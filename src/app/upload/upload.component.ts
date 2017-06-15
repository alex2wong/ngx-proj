import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

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
  http: Http;
  timer: any;
  fileContent: any;
  baseRequestOpts: RequestOptionsArgs;
  @Output() imageResult = new EventEmitter();

  constructor(http: Http) {
    this.http = http;    
  }

  ngOnInit() {
    this.fileloaded = {
      name: "",
      type: "",
      size: "",
    }    
    this.actionURL = "http://111.231.11.20:8000/upload";  
  }

  // upload img file..
  upload(evt) {
    console.warn("file Changed..");
    let $ele = evt.target;
    if (($ele.files.length) > 0 && (/image\/\w+/.test($ele.files[0].type))) {
      this.fileloaded = $ele.files[0];
      let reader = new FileReader();
      // reader as DataURL base64 imageSource.
      reader.onload = (result: ProgressEvent) => {
        this.fileContent = result;
        let inputEle: HTMLInputElement = <HTMLInputElement>document.querySelector('#file2upload');
        inputEle.style.backgroundImage = "url(" + reader.result + ")";
        inputEle.style.opacity = "0.6";
        this.imageResult.emit(true);
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
    if (!this.fileloaded.size) return;
    this.form = document.querySelector('#imageForm');

    this.http.post(this.actionURL, this.constructForm()).toPromise()
      .then((res: any) => {
        if (res._body) {
          alert(res._body);
          let _body = JSON.parse(res._body),
          objs = JSON.parse(_body.objs),
          objects = objs.objects;
          objects.forEach(element => {
            // render rect on image..
          });
        }
        evt.target.disabled = false;
      })
    evt.target.disabled = true;
  }

  constructForm() {
    let sendable = new FormData();
    sendable.append('file2upload', this.fileloaded, this.fileloaded.name);
    return sendable;
  }

  checkResult() {
    let targetFrame = top.frames['__blank'];
    if (targetFrame.document.body.innerHTML) {
      return targetFrame.document.body.innerHTML;
    }
  }
}
