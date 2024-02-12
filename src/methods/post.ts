import {IncomingMessage, ServerResponse} from "http"
import {parseUrl} from "../util/parseUrl";
import {IUser} from "../models/models";
import {parseBody} from "../util/body-parser";
import {handleResponse} from "../util/handleResponse";
import {addUser} from "../util/addUser";

export const postRequest = async (req: IncomingMessage, res: ServerResponse, store: Array<IUser>) => {
    parseUrl(req.url)
    const body = await parseBody(req)
    const user = addUser(body, store)
    const message = `User is added: ${JSON.stringify(user)}`;
    handleResponse(res, 201, message)
}