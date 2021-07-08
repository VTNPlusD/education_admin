import { IUser } from 'interfaces/IUser'
import { EUserActions } from './EUserAction'
import {
  GetUsersAction,
  UpdateUsersAction,
  GetUserByIdAction,
  UpdateUserDetailAction
} from './usersTypes'

export const getUsersListAction = (): GetUsersAction => ({
  type: EUserActions.USERS_LIST
})

export const getUserByIdAction = (id: number): GetUserByIdAction => ({
  type: EUserActions.GET_USER_BY_ID,
  id
})

export const updateUserDetailAction = (
  user: IUser
): UpdateUserDetailAction => ({
  type: EUserActions.UPDATE_USER_DETAIL,
  user
})

export const updateUsersListAction = (
  usersList: IUser[]
): UpdateUsersAction => ({
  type: EUserActions.UPDATE_USERS_LIST,
  usersList
})
