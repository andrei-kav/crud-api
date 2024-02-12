import {IncomingMessage, ServerResponse} from "http"
import {IUser} from "../models/models";
import {parseUrl} from "../util/parseUrl";
import {handleResponse} from "../util/handleResponse";
import {updateUser} from "../util/updateUser";
import {parseBody} from "../util/body-parser";

export const putRequest = async (req: IncomingMessage, res: ServerResponse, store: Array<IUser>) => {
    const {uuid} = parseUrl(req.url)

    if (!uuid) {
        handleResponse(res, 400, 'User ID is not provided')
    } else {
        const body = await parseBody(req)
        const user = updateUser(uuid, body, store)
        const message = `User info is updated: ${JSON.stringify(user)}`
        handleResponse(res, 200, message)
    }
}