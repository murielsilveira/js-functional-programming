var _ = require('lodash')


/*
simple example
*/
var dragon =
	name =>
		size =>
			element =>
				name + ' is a ' +
				size + ' dragon that breathes ' +
				element + '!'
var output = dragon('Karo')('large')('ice')
console.log(output, '\n')


/*
playing around
*/
var dragons = [
	{ name: 'fluffykins', element: 'lightning' },
	{ name: 'noomi',      element: 'lightning' },
	{ name: 'karo',       element: 'fire' },
	{ name: 'doomer',     element: 'timewarp' }
]

/* normal version */
var hasElement = (element, obj) => element === obj.element
var lightningDragons = dragons.filter(d => hasElement('lightning', d))
console.log('normal', lightningDragons, '\n')

/* curried */
var hasElement = 
	_.curry((element, obj) => element === obj.element)
var lightningDragons = dragons.filter(hasElement('lightning'))
console.log('curried', lightningDragons, '\n')

