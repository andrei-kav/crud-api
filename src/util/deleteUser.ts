import {IUser} from "../models/models";
import {getUser} from "./getUser";

export const deleteUser = (id: string, store: Array<IUser>) => {
    const user = getUser(store, id)
    const ind = store.indexOf(user)
    store.splice(ind, 1)
    return user
}