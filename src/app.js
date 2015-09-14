import 'zone.js';
import 'reflect-metadata';

import {Component, View, bootstrap} from 'angular2/angular2';

@Component( {
    selector: 'my-component'
} )

@View( {
    template: 'Hello {{name}}!'
} ) class MyComponentComponent {

    private name:string;

    constructor() {
        this.name = 'World';
    }
}

bootstrap( MyComponentComponent );
