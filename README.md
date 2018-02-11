# SimpleExpand.js
Simple jQuery plugin to add expand/shrink 'Show More' functionality.

**Requirements:** jQuery 1.4+

## Features
* Lightweight (<2KB) and efficient
* Simple and easy to use
* Customisable speed and easing (supports jQuery UI)

## Usage
Add a `simpleExpand` class to any element to be hidden, and call `simpleExpand.expand({your-element})` to expand or shrink it.

**HTML:**
```html
<div id="example" class="simpleExpand">Anything here will get hidden until expanded.</div>
```

**JS:**
```js
simpleExpand.init().expand($('#example')[0]);
```

* **simpleExpand.init():** Initialise the plugin, Returns `simpleExpand`.
* **simpleExpand.expand(*element*, *callback*)**: Expand or shrink this non-jQuery element. Returns `simpleExpand`.
 * **callback(*element*, *expand-type*)**: Passes the (jQuery) element called, and `"expand"` or `"shrink"` based on the action.
* **simpleExpand.settings(*settings*)**: override default settings with an `object` (see below for detail). Returns `simpleExpand`.
* **simpleExpand.isExpanded(*element*)**: returns true or false depending on whether that element is expanded.

## Settings
These can be passed in as a object to `simpleExpand.settings()`.

### speed
Type: `Number` (ms), Default: `400`

How long it will take for a letter to be typed. 

### easing
Type: `String`, Default: `"swing"`

A jQuery easing function to use for the expanding/shrinking animation.

## Examples

The most basic usage, with default settings:
[Basic Usage (CodePen)]( "CodePen")

Changing the settings:
[Basic Usage (CodePen)]( "CodePen")



