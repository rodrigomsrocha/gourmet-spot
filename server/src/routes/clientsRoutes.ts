import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function clientsRoutes(app: FastifyInstance) {
  app.post('/clients', (request) => {
    const bodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
    })

    const { name, email } = bodySchema.parse(request.body)

    const client = prisma.client.create({
      data: { name, email },
    })

    return client
  })

  app.get('/clients', async (request) => {
    const clients = await prisma.client.findMany()
    return clients
  })

  app.get('/clients/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const client = await prisma.client.findUniqueOrThrow({
      where: { id },
    })

    return client
  })

  app.delete('/clients/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.client.delete({
      where: { id },
    })
  })
}
