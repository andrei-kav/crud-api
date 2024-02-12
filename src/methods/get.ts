import {IncomingMessage, ServerResponse} from 'http'
import {handleResponse} from '../util/handleResponse'
import {IUser} from '../models/models'
import {parseUrl} from '../util/parseUrl'
import {getUser} from "../util/getUser";

export const getRequest = async (req: IncomingMessage, res: ServerResponse, store: Array<IUser>) => {
    const {uuid} = parseUrl(req.url)
    if (!uuid) {
        // get users
        const message = store.length ? store : 'no any user have been added yet'
        handleResponse(res, 200, `All users: ${JSON.stringify(message)}`)
    } else {
        const user = getUser(store, uuid)
        handleResponse(res, 200, `User are looking for ${JSON.stringify(user)}`)
    }
}