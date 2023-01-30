import Fastify, { FastifyRequest, FastifyReply } from "fastify";

function buildServer() {
    const server = Fastify({
        logger: true
    })

    server.get("/healhcheck", async ()=> {
        return {status:"ok"}
    })

    return server
}

export default buildServer