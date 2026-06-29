import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({ logger: true })

await fastify.register(cors, { origin: true })

fastify.get('/api/hello', async () => {
  return { message: 'Hello from Fastify 👋', time: new Date().toISOString() }
})

const port = Number(process.env.PORT) || 3001

try {
  await fastify.listen({ port, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
