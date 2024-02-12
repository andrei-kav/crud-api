import {IncomingMessage, ServerResponse} from "http"
import {parseUrl} from "../util/parseUrl";
import {IUser} from "../models/models";
import {handleResponse} from "../util/handleResponse";
import {deleteUser} from "../util/deleteUser";

export const deleteRequest = async (req: IncomingMessage, res: ServerResponse, store: Array<IUser>) => {
    const {uuid} = parseUrl(req.url)

    if (!uuid) {
        handleResponse(res, 400, 'User ID is not provided')
    } else {
        const user = deleteUser(uuid, store)
        console.log('deleted user', user)
        const message = `User is removed: ${JSON.stringify(user)}`
        handleResponse(res, 204, message)
    }
}