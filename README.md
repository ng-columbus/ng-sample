# ng2-sample 

Sample of an Angular 2 build environment

This project is one of many ways of programming with AngularJS 2. It uses TypeScript for its
programming language.

## Install

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

It is best to install the Typescript compiler and type definitions utility globally.

```
npm install -g typescript tsd
```


## Build


```sh
npm install
```

Compile the TypeScript code

```
tsc -p src
```

Run the web server

```
live-server --open=src
```

## Dependencies

- [angular2](https://github.com/git+https:/): Angular 2 - a web framework for modern web apps
- [es6-module-loader](https://github.com/git+https:/): An ES6 Module Loader shim
- [systemjs](https://github.com/systemjs/systemjs): System loader extension for flexible AMD &amp; CommonJS support
- [traceur](https://github.com/git+https:/): ES6 to ES5 compiler

## Dev Dependencies

- [live-server](https://github.com/git+https:/): simple development http server with live reload capability


## License

MIT
