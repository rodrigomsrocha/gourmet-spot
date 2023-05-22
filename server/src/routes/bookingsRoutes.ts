import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function bookingsRoutes(app: FastifyInstance) {
  app.post('/bookings', async (request, reply) => {
    const bodySchema = z.object({
      clientId: z.string().uuid(),
      quantity: z.number(),
    })

    const { clientId, quantity } = bodySchema.parse(request.body)

    const freeTable = await prisma.table.findFirst({
      where: {
        capacity: { gte: quantity },
        isFree: true,
      },
    })

    if (!freeTable) {
      return reply.status(400).send({ error: 'Nenhuma mesa encontrada' })
    }

    const booking = await prisma.booking.create({
      data: {
        table: {
          connect: {
            id: freeTable.id,
          },
        },
        client: {
          connect: {
            id: clientId,
          },
        },
      },
    })

    await prisma.table.update({
      where: {
        id: freeTable.id,
      },
      data: { isFree: false },
    })

    return booking
  })
}
