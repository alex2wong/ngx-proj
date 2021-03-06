import { Component, OnInit } from '@angular/core';
import { mapboxgl } from 'mapbox-gl';

@Component({
  selector: 'app-map-gl',
  templateUrl: './map-gl.component.html',
  styleUrls: ['./map-gl.component.css']
})
export class MapGLComponent implements OnInit {
  center: Array<number> = [120.00, 31.00];
  zoom: number = 10;
  selector: string = "map";
  constructor() { }

  ngOnInit() {
      // this.mapbox.accessToken = 'pk.eyJ1IjoiaHVhbmd5aXhpdSIsImEiOiI2WjVWR1hFIn0.1P90Q-tkbHS38BvnrhTI6w';
      // var map = new this.mapbox.Map({
      //     container: this.selector,
      //     style: 'mapbox://styles/mapbox/streets-v9',
      //     center: this.center,
      //     zoom: this.zoom
      // });
  }
}
