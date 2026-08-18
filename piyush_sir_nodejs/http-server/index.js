import http from 'http'
import fs from 'node:fs'
const port = 8000

const server = http.createServer((req, res) => {

    const method = req.method
    const path = req.url

    const log = `${[Date.now().toLocaleString()]}:${method} ${path}`

    fs.appendFileSync('./log.txt', `/n${log}`, 'utf-8')

    switch (method) {
        case'GET': {
            switch (path) {
                case '/':
                    return res.writeHead(200).end('home page')
                case '/contact-page':
                    return res.writeHead(200).end('contact page')

                case '/tweet':
                    return res.writeHead(200).end('/n tweet1 /n tweet2')

            }
        }
        case 'POST': {
            switch (path) {
                case '/tweet':
                    res.writeHead(201).end('tweet created')
            }
        }
    }
})

server.listen(port, () => {
    console.log(`server is listing on port ${port}`)
})