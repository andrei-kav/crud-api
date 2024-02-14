import {ServerResponse} from "http"

export const handleResponse = (res: ServerResponse, code: number, message: string) => {
    res.statusCode = code
    res.setHeader('Content-Type', 'text/plain')
    res.write(message)
    res.end()
}