const fetch = require('node-fetch')
const co = require('co')

// fetch('http://jsonplaceholder.typicode.com/posts/1')
//   .then(r => r.json())
//   .then(post => post.title)
//   .then(title => console.log('Title:', title))

run(function *() {
  const uri = 'http://jsonplaceholder.typicode.com/posts/1'
  const response = yield fetch(uri)
  const post = yield response.json()
  const title = post.title
  console.log('Title:', title)
})

function run(generator) {
  const iterator = generator()
  console.log(iterator.next())
}
