import {IUser, RequestError} from "../models/models";
import {IncomingMessage} from "http";

export const parseBody = async (req: IncomingMessage): Promise<Partial<IUser>> => {
    return new Promise<Partial<IUser>>((resolve, reject) => {
        try {
            let body = ""
            req.on('data', chunk => {
                body += chunk
            });
            req.on('end', () => {
                resolve(JSON.parse(body))
            });
        } catch {
            reject(new RequestError(400, 'Cannot parse the request body'))
            // new RequestError(400, 'Cannot parse the request body')
        }
    })
}