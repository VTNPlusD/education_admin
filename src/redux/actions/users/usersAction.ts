import { IUser } from 'interfaces/IUser'
import { GetUsersAction, UpdateUsersAction, UsersTypes } from './usersTypes'

export const getUsersListAction = (): GetUsersAction => ({
  type: UsersTypes.USERS_LIST
})

export const updateUsersListAction = (
  usersList: IUser[]
): UpdateUsersAction => ({
  type: UsersTypes.UPDATE_USERS_LIST,
  usersList
})
