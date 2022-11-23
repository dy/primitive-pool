var cache = {}, nullObj = {}, undefinedObj = {}

export default (key) => {
	if (key === null) return nullObj

	if (key === undefined) return undefinedObj

	if (typeof key === 'number' || key instanceof Number)
		return cache[key] || (cache[key] = new Number(key))

	if (typeof key === 'string' || key instanceof String)
		return cache[key] || (cache[key] = new String(key))

	if (typeof key === 'boolean' || key instanceof Boolean)
		return cache[key] || (cache[key] = new Boolean(key))

	// treat any other non-primitive key directly
	return key
}
