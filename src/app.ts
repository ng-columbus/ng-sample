import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
    template: 'Hello {{name}}!'
})

class MyAppComponent {

    private name:string;

    constructor() {
        this.name = 'World';
    }
}

bootstrap(MyAppComponent);
