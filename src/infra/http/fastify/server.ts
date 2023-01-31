import Fastify, { FastifyRequest, FastifyReply } from "fastify";

function buildServer() {
    const server = Fastify({
        logger: {
            level: 'info',
            transport: {
                target: 'pino-pretty'
            }
        }
    })

    server.get("/healhcheck", async ()=> {
        return {status:"ok"}
    })

    return server
}

export default buildServer