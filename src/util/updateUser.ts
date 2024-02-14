import {IUser, RequestError, userToCreate} from "../models/models"
import {getUser} from "./getUser";

const newDataWrong = (updates: Partial<userToCreate>): boolean => {
    const idExists = typeof (updates as any).id !== 'undefined'
    const nameNotString = !['undefined', 'string'].includes(typeof updates.username)
    const ageNotNUmber = !['undefined', 'number'].includes(typeof updates.age)
    const hobbiesInvalid = typeof updates.hobbies !== 'undefined'
        && (!Array.isArray(updates.hobbies) || (Array.isArray(updates.hobbies) && !updates.hobbies.length))

    return idExists || nameNotString || ageNotNUmber || hobbiesInvalid
}

export const updateUser = (id: string, updates: Partial<userToCreate>, store: Array<IUser>): IUser => {
    if (newDataWrong(updates)) {
        throw new RequestError(400, 'New data is invalid. Pay attention to the required fields')
    }
    const user = getUser(store, id)
    const updatedUser = {...user, ...updates}
    const ind = store.indexOf(user)
    store.splice(ind, 1, updatedUser)
    return updatedUser
}