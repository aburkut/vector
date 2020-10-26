# Vector [![Build Status](https://travis-ci.com/aburkut/vector.svg?branch=master)](https://travis-ci.com/aburkut/vector) [![codecov](https://codecov.io/gh/aburkut/vector/branch/master/graph/badge.svg?token=TH0mD5H3qx)](https://codecov.io/gh/aburkut/vector)


The library provides Vector class that supports core operations for mathematical 2d and 3d vectors (add, sub, mul, div, cross product, dot product).

## NPM scripts

* npm run build: `compile ts to js`
* npm test: `run tests`
* npm run lint: `run eslint`
* npm run lint:fix: `run eslint in fix mode (--fix)`

## Constructing Vectors


```
const a = new Vector (1, 2, 3); // 3D
const b = new Vector(1, 2); // 2D
```
Or by providing x, y, z as an array as parameter to the constructor.
```
const a = new Vector ([1, 2, 3]); // 3D
const b = new Vector([1, 2]); // 2D
```

## Operations with Vectors

Once you have constructed one or more vector objects, you can use the
following mathematical operations to compute them:

### Multiplication:

```
const a = new Vector([1, 2, 3]);
const c = a.mul(10); // [10, 20, 30]
```

### Division:

```
const a = new Vector([1, 2, 3]);
const c = a.div(10); // [0.1, 0.2, 0.3]
```

### Addition:

```
const a = new Vector([1, 2, 3]);
const b = new Vector([3, 2, 1]);
const c = a.add(b); // [4, 4, 4]
// OR const c = a.add([3, 2, 1]); // [4, 4, 4]
```

### Substraction:

```
const a = new Vector([1, 2, 3]);
const b = new Vector([3, 2, 1]);
const c = a.sub(b); // [-2, 0, 2]
// OR const c = a.sub([3, 2, 1]); // [-2, 0, 2]
```

### Cross product:

```
const a = new Vector([1, 2, 3]);
const b = new Vector([3, 2, 1]);
const c = a.cross(b); // [-4, 8, -4]
// OR const c = a.cross([3, 2, 1]); // [-4, 8, -4]
```

### Dot product:

```
const a = new Vector([1, 2, 3]);
const b = new Vector([3, 2, 1]);
const c = a.dot(b); // 10
// OR const c = a.dot([3, 2, 1]); // 10
```

