import {IUser, RequestError, userToCreate} from "../models/models"
import { v4 as uuidv4 } from 'uuid';

const isUserToCreate = (user: Partial<IUser>): user is userToCreate => {
    return typeof user.age === "number"
        && typeof user.username === "string" && !!user.username.length
        && Array.isArray(user.hobbies) && !!user.hobbies.length
}

export const addUser = (user: Partial<IUser>, store: Array<IUser>): IUser => {
    if (!isUserToCreate(user)) {
        throw new RequestError(400, 'Request body does not contain some of required fields: username< string >, age< number >, hobbies< Array<string> >')
    }
    const id = uuidv4();
    const newUser: IUser = {id, ...user}
    store.push(newUser)
    return newUser
}