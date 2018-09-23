# libarr

A Javascript library for copying, moving and remove elements from arrays

## How to install

Import **libarr** from /dist folder.  
There are 3 versions
- libarr.cjs.js ... CommonJS
- libarr.esm.js ... ES6 module
- libarr.umd.js ... older Javascript

### Javascript - no framework

Place into the HTML before your custom JavaScript file
````html
<script src="<yourDir>/libarr.X.js"></script>
````

## How to use

````javascript
import libarr from 'yourDir/libarr.esm.js'
const a = libarr
const someArray = [1,2,3]
const otherArray = [9]

a.arr_copyTo(someArray, otherArray)
````

Look into js file for all available functions

## Testing

```bash
yarn test
yarn test --watch
  
npm test
npm test --watch
```


