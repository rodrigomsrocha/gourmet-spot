import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function tablesRoutes(app: FastifyInstance) {
  app.post('/tables', async (request) => {
    const bodySchema = z.object({
      number: z.number(),
      capacity: z.number(),
    })

    const { number, capacity } = bodySchema.parse(request.body)

    const memory = prisma.table.create({
      data: { number, capacity },
    })

    return memory
  })

  app.get('/tables', async (request) => {
    const dishes = await prisma.table.findMany()
    return dishes
  })

  app.get('/tables/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const dish = await prisma.table.findUniqueOrThrow({
      where: { id },
    })

    return dish
  })

  app.put('/tables/:id/is_free', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodyShcema = z.object({
      isFree: z.coerce.boolean(),
    })

    const { isFree } = bodyShcema.parse(request.body)

    const table = await prisma.table.update({
      where: { id },
      data: { isFree },
    })

    return table
  })
}
