'use strict'

module.exports = getKey

var cache = {}, nullObj = {}, undefinedObj = {}

function getKey (key) {
	// tagged template
	if (Array.isArray(key) && key.raw) key = String.raw.apply(this, arguments)

	if (key === null) {
		return nullObj
	}
	if (key === undefined) {
		return undefinedObj
	}

	var obj

	if (typeof key === 'number' || key instanceof Number) {
		if (cache[key]) return cache[key]
		obj = new Number(key)
		cache[key] = obj
		return obj
	}

	if (typeof key === 'string' || key instanceof String) {
		if (cache[key]) return cache[key]
		obj = new String(key)
		cache[key] = obj
		return obj
	}

	if (typeof key === 'boolean' || key instanceof Boolean) {
		if (cache[key]) return cache[key]
		obj = new Boolean(key)
		cache[key] = obj
		return obj
	}

	// treat any other non-primitive key directly
	return key
}
