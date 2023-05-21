import fastify from 'fastify'
import { dishesRoutes } from './routes/dishesRoutes'

const app = fastify()

app.register(dishesRoutes)

app
  .listen({
    port: 3003,
  })
  .then(() => {
    console.log('🚀 server running at http://localhost:3003')
  })
