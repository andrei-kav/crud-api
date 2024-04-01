export const BASE_ROUTE = '/api/users'

export interface IParsedUrl {
    whole: string;
    uuid: string;
}

export interface IUser {
    id: string;
    username: string;
    age: number;
    hobbies: Array<string>;
}

export type userToCreate = Omit<IUser, 'id'>

interface IRequestError {
    error: Error;
    code: number;
}

export class RequestError implements IRequestError {
    code: number
    error: Error

    constructor(code: number, message: string) {
        this.code = code
        this.error = new Error(message)
    }
}