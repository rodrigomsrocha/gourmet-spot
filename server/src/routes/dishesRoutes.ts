import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function dishesRoutes(app: FastifyInstance) {
  app.post('/dishes', async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      description: z.string(),
      coverURL: z.string().url(),
      prepTime: z.number(),
      price: z.number(),
    })

    const { name, description, coverURL, prepTime, price } = bodySchema.parse(
      request.body,
    )

    const memory = prisma.dish.create({
      data: {
        name,
        description,
        coverURL,
        prepTime,
        price,
      },
    })

    return memory
  })

  app.get('/dishes', async (request) => {
    const dishes = await prisma.dish.findMany()

    return dishes
  })

  app.get('/dishes/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const dish = await prisma.dish.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return dish
  })

  app.put('/dishes/:id', async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      description: z.string(),
      coverURL: z.string().url(),
      prepTime: z.number(),
    })

    const { name, description, coverURL, prepTime } = bodySchema.parse(
      request.body,
    )

    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const dish = await prisma.dish.update({
      where: { id },
      data: { name, description, coverURL, prepTime },
    })

    return dish
  })

  app.delete('/dishes/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.dish.delete({
      where: {
        id,
      },
    })
  })
}
