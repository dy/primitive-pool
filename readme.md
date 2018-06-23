# primitive-pool [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dy/primitive-pool.svg)](https://travis-ci.org/dy/primitive-pool)

Get object for a primitive value. Useful to make WeakMap store strings/numbers and other primitives.

## Usage

[![npm install primitive-pool](https://nodei.co/npm/primitive-pool.png?mini=true)](https://npmjs.org/package/primitive-pool/)


```js
let p = require('primitive-pool')

let map = new WeakMap()

map.set(p('abc'), 123)
map.get(p('abc')) // 123

map.set(p``, 456)
map.get(p``) // 456

map.set(p(null), 789)
map.get(p(null)) // 789

map.set(p(123), 'abc')
map.get(p(123)) // 'abc'
```
