import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LargeListComponent } from './largeList/largeList.component';
import { MapGLComponent } from './map-gl/map-gl.component';

@NgModule({
  declarations: [
    AppComponent,
    LargeListComponent,
    MapGLComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
