import {IncomingMessage, ServerResponse} from "http"
import {parseUrl} from "../util/parseUrl";
import {IUser, RequestError} from "../models/models";
import {parseBody} from "../util/body-parser";
import {handleResponse} from "../util/handleResponse";
import {addUser} from "../util/addUser";

export const postRequest = async (req: IncomingMessage, res: ServerResponse, store: Array<IUser>) => {
    const {uuid} = parseUrl(req.url)
    if (uuid) {
        throw new RequestError(400, 'Invalid request. Try to delete User ID from the URL')
    }
    const body = await parseBody(req)
    const user = addUser(body, store)
    const message = `User is added: ${JSON.stringify(user)}`;
    handleResponse(res, 201, message)
}