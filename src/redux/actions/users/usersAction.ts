import { UsersAction, UsersTypes } from './usersTypes'

export const getUsersListAction = (): UsersAction => ({
  type: UsersTypes.USERS_LIST
})
