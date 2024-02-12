import {RequestError} from "../models/models";

export const handleError = (error: any): {code: number, message: string} => {
    let code = 500
    let message = 'Internal Server Error. Try to reload the server or ...\nBe calm and stay handsome'

    if (error instanceof RequestError) {
        code = error.code
        message = error.error.message
    }

    return {code, message}
}