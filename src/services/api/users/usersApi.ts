import { USERS_LIST, GET_USER_BY_ID } from '..'
import instance from '../v1'

class UsersApis {
  getUsersList = () => instance.get(USERS_LIST)
  getUserById = (id: number) =>
    instance.get(GET_USER_BY_ID.concat('/').concat(id.toString()))
}

export const UsersApi = new UsersApis()
