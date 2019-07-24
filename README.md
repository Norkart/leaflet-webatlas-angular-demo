# AngularLeaflet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Leaflet implementation
To add leaflet and leaflet-webatlastile to an existing project do the following:
Install the packages
  
    npm install leaflet leaflet-webatlastile --save
Modify angular.json so it looks like

```
             "styles": [
              ...
              "node_modules/leaflet/dist/leaflet.css"
            ],
            "scripts": [
              ...
              "node_modules/leaflet/dist/leaflet.js",
              "node_modules/leaflet-webatlastile/L.TileLayer.Webatlas.min.js"
            ]
```
See the component app for a quick demo on how to use our tiles. You'll need to have your own api-key and replace it in app.component.ts here:

```
    const api_key = 'API-KEY' // INSERT YOUR KEY HERE;
```
Take a look at the [leaflet reference](https://leafletjs.com/reference-1.5.0.html) and [examples](https://leafletjs.com/examples.html) for more information on how to use leaflet
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
