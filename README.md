# TWReplace.js

Continually replace text using a typing animation.

follow [@samjdavis](http://twitter.com/samjdavis) for updates on TWRelpace.

### [LIVE DEMO](http://samjdavis13.github.io/twreplace/)

## Live examples
Coming soon... (hopefully)

## Version
v0.1.1

## Documentation
It takes just second to install and use TWReplace.js

### Installation
##### Bower

````bash
    bower install twreplace
````

##### HTML

````html
<script src="src/twreplace.js"></script>
````

### Basic Usage
##### HTML

````html
<p>This text has an <span twreplace='["fantastic", "easy", "simple"]'>editable</span> element</p>
````

##### JS

````javascript
twReplace();
````

### Advanced Usage
Several options are available to TWReplace.js at this stage:

- twreplace-charspeed (Speed that characters are removed/added. Measured in ms. Defaults to 25)

```` html
 <p twreplace='["Word 1", "Word 2"]' twreplace-charspeed="50">Change</p>
````

- twreplace-wordspeed (Speed that words are changed. Measured in ms. Defaults to 2000)

```` html
 <p twreplace='["Word 1", "Word 2"]' twreplace-wordspeed="1000">Change</p>
````

## Contribute

The library is written in vanilla javascript, please update src/twreplace.js

We use grunt to compile the scss into css.

Install the libraries

````bash
npm install
````

Get the compilation running in the background
````bash
grunt watch
````


## Bug Tracker
If you find a bug, please report it [here on Github](https://github.com/samjdavis13/twreplace/issues)!

## Developer
Developed by Samuel Davis, [sjd.co](http://sjd.co)

- [@samjdavis](http://twitter.com/samjdavis)
- [Github profile](http://github.com/samjdavis13)

Thanks!
