import buildServer from "./server";

const server = buildServer()
const PORT = 3000
const HOST = '0.0.0.0'

async function main(){
    server.listen({ port: PORT, host: HOST }, function (err, address) {
        if (err) {
          server.log.error(err)
          process.exit(1)
        }
        server.log.info(`server listening on ${address}`)
      })
}
main()