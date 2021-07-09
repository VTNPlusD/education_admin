import { IUserListRequest } from 'services/requests/IUserListRequest'
import { USERS_LIST, GET_USER_BY_ID } from '..'
import instance from '../v1'

class UsersApis {
  getUsersList = (request: IUserListRequest) =>
    instance.get(USERS_LIST, {
      params: request
    })
  getUserById = (id: number) =>
    instance.get(GET_USER_BY_ID.concat('/').concat(id.toString()))
}

export const UsersApi = new UsersApis()
