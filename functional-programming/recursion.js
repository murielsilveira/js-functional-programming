var categories = [
	{ id: 'animals', parent: null },
	{ id: 'mammals', parent: 'animals' },
	{ id: 'dogs', parent: 'mammals' },
	{ id: 'cats', parent: 'mammals' },
	{ id: 'chihuahua', parent: 'dogs' },
	{ id: 'labrador', parent: 'dogs' },
	{ id: 'persian', parent: 'cats' },
	{ id: 'siamese', parent: 'cats' }
]

var makeTree = (categories, parent) => {
	var node = {}
	categories
		.filter(c => c.parent === parent)
		.forEach(c =>
			node[c.id] = makeTree(categories, c.id))
	return node
}

console.log(
	JSON.stringify(
		makeTree(categories, null),
		null, 2))
