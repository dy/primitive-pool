'use strict'

module.exports = getKey

var cache = {}, nullObj = {}, undefinedObj = {}

function getKey (key) {
	if (cache[key]) return cache[key]

	// tagged template
	if (Array.isArray(key) && key.raw) key = String.raw.apply(this, arguments)
	var obj
	if (typeof key === 'number' || key instanceof Number) {
		obj = new Number(key)
	}
	else if (typeof key === 'string' || key instanceof String) {
		obj = new String(key)
	}
	else if (typeof key === 'boolean' || key instanceof Boolean) {
		obj = new Boolean(key)
	}
	else if (key === null) {
		obj = nullObj
	}
	else if (key === undefined) {
		obj = undefinedObj
	}
	else {
		obj = key
	}

	cache[key] = obj

	return obj
}
