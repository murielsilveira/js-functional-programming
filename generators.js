const fetch = require('node-fetch')

fetch('http://jsonplaceholder.typicode.com/posts/1')
  .then(console.log)
