import { USERS_LIST } from '..'
import instance from '../v1'

class UsersApis {
  getUsersList = () => instance.get(USERS_LIST)
}

export const UsersApi = new UsersApis()
