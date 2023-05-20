import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'hello world'
})

app
  .listen({
    port: 3003,
  })
  .then(() => {
    console.log('server running at http://localhost:3003')
  })
