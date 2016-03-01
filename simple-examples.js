var animals = [
	{name: 'Brahma', species: 'dog', weight: 250},
	{name: 'Bud',    species: 'dog', weight: 400},
	{name: 'Cevada', species: 'dog', weight: 100},
	{name: 'Chica',  species: 'cat', weight: 325},
];

/*
filter
*/
var isDog = function(animal) {
    return animal.species === 'dog';
};
var dogs = animals.filter(isDog);
console.log('dogs:', dogs);

/*
map  
*/
var names = animals.map(function(animal) {
    return animal.name;
});
console.log('names:', names);

/*
reduce
*/
var totalWeight = animals.reduce(function(sum, animal) {
    return sum + animal.weight;
}, 0);
console.log('totalWeight:', totalWeight);
