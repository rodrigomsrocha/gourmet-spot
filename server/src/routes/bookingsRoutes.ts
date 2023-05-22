import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function bookingsRoutes(app: FastifyInstance) {
  app.post('/bookings', async (request, reply) => {
    const bodySchema = z.object({
      clientID: z.string().uuid(),
      quantity: z.number(),
    })

    const { clientID, quantity } = bodySchema.parse(request.body)

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
            id: clientID,
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

  app.get('/bookings', async (request) => {
    const bookings = await prisma.booking.findMany()
    return bookings
  })

  app.get('/bookings/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const booking = await prisma.booking.findUniqueOrThrow({
      where: { id },
    })

    return booking
  })

  app.delete('/bookings/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const booking = await prisma.booking.findUniqueOrThrow({
      where: { id },
      include: { table: true },
    })

    if (!booking) {
      return reply.status(404).send({ error: 'Reserva não encontrada' })
    }

    await prisma.booking.delete({
      where: { id },
    })

    await prisma.table.update({
      where: { id: booking.table.id },
      data: { isFree: true },
    })
  })
}
