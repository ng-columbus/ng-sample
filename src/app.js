import 'zone.js';
import 'reflect-metadata';

import {Component, View, bootstrap} from 'angular2/angular2';

@Component( {
    selector: 'github-search'
} )

@View( {
    template: 'Hello {{name}}'
} ) class GithubSearchComponent {

    private name:string;

    constructor() {
        this.name = 'Bob';
    }
}

bootstrap( GithubSearchComponent );
