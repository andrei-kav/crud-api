import {BASE_ROUTE, IParsedUrl, RequestError} from '../models/models'
import { version as uuidVersion } from 'uuid'
import { validate as uuidValidate } from 'uuid'

function uuidValidateV4(uuid: string): boolean {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4
}

export const parseUrl = (url: string | undefined): IParsedUrl => {

    if (!url) {
        throw new RequestError(400, 'Invalid request')
    }

    const base = url.slice(0, url.lastIndexOf('/'))
    const whole = url.endsWith('/') ? base : url
    const uuid = base === BASE_ROUTE ? url.slice(url.lastIndexOf('/') + 1) : ''

    if (!uuid && whole !== BASE_ROUTE) {
        throw new RequestError(404, `Route "${whole}" not found`)
    }
    if (uuid && !uuidValidateV4(uuid)) {
        throw new RequestError(400, `User UUID "${uuid}" is invalid`)
    }

    return { whole, uuid }
}