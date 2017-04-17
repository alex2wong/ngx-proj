# ngx-proj
AngularX project based on Angular-cli, include customized useful component and directive.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Customized components
- large list/select: apply pagenation to promote performance. <br><br>
Actually, chrome render select options before we select, <br>
but firefox render the select after we click select. <br>
This larget list component is meant to pollyfill the diff and provide fluid experience.

    [DEMO](https://alex2wong.github.io/ngx-proj/dist/)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
