# Vector

The library provides Vector class that supports core operations for mathematical vectors (add, sub, cross product, dot product).

## Constructing Vectors

A vector is constructed from 3d coordinate simply
by providing the x, y and z components as parameters to the constructor.
```
const a = new Vector (1, 2, 3); 
```
Or by providing x,y,z as an array as parameter to the constructor.
```
const a = new Vector ([1, 2, 3]); 
```

## Operations with Vectors

Once you have constructed one or more vector objects, you can use the
following mathematical operations to compute them:

  * Addition: `c = Vector.add (a, b);`
  * Substraction: `c = Vector.sub (a, b);`
  * Cross product: `c = Vector.cross (a, b);`
  * Dot product: `c = Vector.dot (a, b);`


## NPM scripts

* npm run build: `compile ts to js`
* npm test: `run tests`
* npm lint: `run eslint`
* npm run lint:fix: `run eslint in fix mode (--fix)`
