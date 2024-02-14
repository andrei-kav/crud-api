import {IUser, RequestError} from '../models/models'

export const getUser = (store: Array<IUser>, uuid: string): IUser => {
    const user = store.filter(item => item.id === uuid)[0]
    if (!user) {
        throw new RequestError(404, `User with ID ${uuid} does not exist`)
    }
    return user as IUser
}