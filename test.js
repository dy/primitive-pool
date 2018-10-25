'use strict'

var p = require('./')
var a = require('assert')

var map = new WeakMap


map.set(p`x`, 1)
a.equal(map.get(p`x`), 1)

map.set(p(undefined), 4)

map.set(p(null), 2)
a.equal(map.get(p(null)), 2)
map.set(p(null), 3)
a.equal(map.get(p(null)), 3)

a.equal(map.get(p(undefined)), 4)

map.set(p(new String('x')), 5)
a.equal(map.get(p('x')), 5)

map.set(p(false), 6)
a.equal(map.get(p(false)), 6)
a.equal(map.get(p(new Boolean(false))), 6)

map.set(p``, 7)
a.equal(map.get(p``), 7)
a.equal(map.get(p('x')), 5)

map.set(p(NaN), 8)
a.equal(map.get(p(NaN)), 8)

a.equal(map.get(p()), 4)


var o = {}
a.equal(p(o), o)

var arr = [1]
var farr = [1]
a.equal(p(arr), arr)
a.equal(p(farr), farr)
