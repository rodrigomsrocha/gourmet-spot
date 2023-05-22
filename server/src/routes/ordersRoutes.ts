import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function ordersRoutes(app: FastifyInstance) {
  app.post('/orders', async (request, reply) => {
    const bodySchema = z.object({
      tableId: z.string().uuid(),
      dishId: z.string().uuid(),
      quantity: z.number(),
    })

    const { tableId, dishId, quantity } = bodySchema.parse(request.body)

    const table = await prisma.table.findUniqueOrThrow({
      where: { id: tableId },
    })

    if (table.isFree) {
      return reply.status(400).send({ error: 'Não tem clientes nessa mesa' })
    }

    const order = prisma.order.create({
      data: {
        tableId,
        dishId,
        quantity,
      },
    })

    return order
  })

  app.get('/orders', async () => {
    const orders = await prisma.order.findMany()
    return orders
  })

  app.get('/orders/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const order = await prisma.order.findUniqueOrThrow({
      where: { id },
    })

    return order
  })

  app.put('/orders/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      dishId: z.string().uuid().optional(),
      quantity: z.number().optional(),
    })

    const { dishId, quantity } = bodySchema.parse(request.body)

    const order = await prisma.order.update({
      where: { id },
      data: { dishId, quantity },
    })

    return order
  })

  app.delete('/orders/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.order.delete({
      where: { id },
    })
  })
}
