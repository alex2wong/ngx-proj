import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LargeListComponent } from './largeList/largeList.component';
import { MapGLComponent } from './map-gl/map-gl.component';
import { LayoutComponent } from './layout/layout.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { GetbingComponent } from './getbing/getbing.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LargeListComponent,
    MapGLComponent,
    LayoutComponent,
    GetbingComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
