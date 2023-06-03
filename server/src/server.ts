import fastify from 'fastify'
import { dishesRoutes } from './routes/dishesRoutes'
import { tablesRoutes } from './routes/tablesRoutes'
import { clientsRoutes } from './routes/clientsRoutes'
import { bookingsRoutes } from './routes/bookingsRoutes'
import { ordersRoutes } from './routes/ordersRoutes'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(dishesRoutes)
app.register(tablesRoutes)
app.register(clientsRoutes)

app.register(bookingsRoutes)
app.register(ordersRoutes)

app
  .listen({
    port: 3003,
  })
  .then(() => {
    console.log('🚀 server running at http://localhost:3003')
  })
