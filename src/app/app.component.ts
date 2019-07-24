import { Component, OnInit } from '@angular/core';
declare let L;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
    const api_key = 'API-KEY' // INSERT YOUR KEY HERE;

    // Adding the map to the div with id 'map' centering on latitude 60 and longitude 10
    const map = L.map('map').setView([60, 10], 3);

    // This is the map types we currently support
    const grey = L.tileLayer.webatlas({apikey: api_key, mapType: L.TileLayer.Webatlas.Type.GREY});
    const vector = L.tileLayer.webatlas({apikey: api_key, mapType: L.TileLayer.Webatlas.Type.VECTOR});
    const aerial = L.tileLayer.webatlas({apikey: api_key, mapType: L.TileLayer.Webatlas.Type.AERIAL});
    const hybrid = L.tileLayer.webatlas({apikey: api_key, mapType: L.TileLayer.Webatlas.Type.HYBRID});
    const medium = L.tileLayer.webatlas({apikey: api_key, mapType: L.TileLayer.Webatlas.Type.MEDIUM});
    const lite = L.tileLayer.webatlas({apikey: api_key, mapType: L.TileLayer.Webatlas.Type.LITE});
    let baseMaps = {
      "grey": grey,
      "vector": vector,
      "aerial": aerial,
      "hybrid": hybrid,
      "medium": medium,
      "lite": lite,
    };
    var overlayMaps = {
    };
    // Replace with your prefered default map
    vector.addTo(map);
    // This is optional if you don't want the user to be able to change the maptypes
    L.control.layers(baseMaps, overlayMaps).addTo(map);
  }
  title = 'angular-leaflet';
}
