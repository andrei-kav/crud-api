import http, {IncomingMessage, ServerResponse} from 'http'
import 'dotenv/config'
import {getRequest} from './methods/get'
import {postRequest} from './methods/post'
import {putRequest} from './methods/put'
import {deleteRequest} from './methods/delete'
import {IUser, RequestError} from './models/models'
import {handleError} from './util/handleError'

const PORT = process.env.PORT || 3001
const store: Array<IUser> = []

const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
    try {
        switch (req.method) {
            case 'GET':
                await getRequest(req, res, store)
                break
            case 'POST':
                await postRequest(req, res, store)
                break
            case 'PUT':
                await putRequest(req, res, store)
                break
            case 'DELETE':
                await deleteRequest(req, res, store)
                break
            default:
                throw new RequestError(400, 'Invalid request')
        }
    } catch (err: any) {
        const {code, message} = handleError(err)
        res.statusCode = code
        res.setHeader('Content-Type', 'text/plain')
        res.write(message)
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})