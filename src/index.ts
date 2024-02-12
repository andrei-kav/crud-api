import http, {IncomingMessage, ServerResponse} from 'http'
import 'dotenv/config'
import {getRequest} from "./methods/get";
import {postRequest} from "./methods/post";
import {putRequest} from "./methods/put";
import {deleteRequest} from "./methods/delete";
import {IUser, RequestError} from "./models/models";
import {handleError} from "./util/handleError";
// import os from "os";
// import cluster from "cluster";
//
// const number = os.availableParallelism()

const PORT = process.env.PORT || 3001

// const store: Array<IUser> = [
//     {
//         id: 'e36cb0ff-bf59-4cc8-bad4-9e97c5ce0566',
//         age: 12,
//         username: 'Vasil',
//         hobbies: [ 'asd' ]
//     },
//     {
//         id: '48938fc8-7427-4fb7-a2a1-e5cdf9052c78',
//         age: 4,
//         username: 'andrei',
//         hobbies: [ 'asd' ]
//     },
//     {
//         id: '3803f826-46af-40c0-8df0-957d6143a11c',
//         age: 23,
//         username: 'Jury',
//         hobbies: [ 'asd' ]
//     }
// ]

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