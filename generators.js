const fetch = require('node-fetch')

fetch('http://jsonplaceholder.typicode.com/posts/1')
  .then(r => r.json())
  .then(post => post.title)
  .then(title => console.log('Title:', title))
