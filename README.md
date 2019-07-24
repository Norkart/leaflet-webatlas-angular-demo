# AngularLeaflet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Leaflet implementation
This project uses leaflet and leaflet-webatlastile
Install the packages
  
    npm install leaflet leaflet-webatlastile --save
Modify angular.json so it looks like

```
             "styles": [
              "src/styles.css",
              "node_modules/leaflet/dist/leaflet.css"
            ],
            "scripts": [
              "node_modules/leaflet/dist/leaflet.js",
              "node_modules/leaflet-webatlastile/L.TileLayer.Webatlas.min.js"
            ]
```
Modify src/app/app.component.ts and replace

´´´
    const api_key = 'API-KEY' // INSERT YOUR KEY HERE;
´´´

With your api-key
See the rest of the component for a quick demo of using our maptiles
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
