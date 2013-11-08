Rework Color
===========

Augmented color manipulations for
[rework](https://github.com/visionmedia/rework)

Installation
------------

```
npm install rework-color
```

Usage
-----

```
var rework = require('rework'),
    read = require('fs').readFileSync,
    color = require('rework-color'),
    css;

    css = rework(read('entry.css', 'utf8'))
            .use(color)
            .toString();

    console.log(css);
```

Methods
-------

* Lighten

> var(blue).lighten(0.5); // hsl(230, 50%, 50%) -> hsl(230, 50%, 75%)

* Darken

> var(blue).darken(0.5); // hsl(230, 50%, 50%) -> hsl(230, 50%, 25%)

