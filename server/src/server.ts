import fastify from 'fastify'
import { dishesRoutes } from './routes/dishesRoutes'
import { tablesRoutes } from './routes/tablesRoutes'
import { clientsRoutes } from './routes/clientsRoutes'

const app = fastify()

app.register(dishesRoutes)
app.register(tablesRoutes)
app.register(clientsRoutes)

app
  .listen({
    port: 3003,
  })
  .then(() => {
    console.log('🚀 server running at http://localhost:3003')
  })
