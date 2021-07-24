import { IUpdateUserById } from 'interfaces/request/IUpdateUserById'
import { IUserListRequest } from 'interfaces/request/IUserListRequest'
import { USERS_LIST, GET_USER_BY_ID, UPDATE_USER_BY_ID } from '..'
import instance from '../v1'

class UsersApis {
  getUsersList = (request: IUserListRequest) =>
    instance.get(USERS_LIST, {
      params: request
    })
  getUserById = (id: number) =>
    instance.get(GET_USER_BY_ID.concat('/').concat(id.toString()))
  updateUserById = (user: IUpdateUserById) =>
    instance.put(UPDATE_USER_BY_ID.concat('/').concat(user.id.toString()), user)
}

export const UsersApi = new UsersApis()
