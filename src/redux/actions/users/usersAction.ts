import { IUser } from 'interfaces/IUser'
import { EUserActions } from './EUserAction'
import {
  IGetUsersAction,
  IUpdateUsersAction,
  IGetUserByIdAction,
  IUpdateUserDetailAction
} from './usersTypes'

export const getUsersListAction = (): IGetUsersAction => ({
  type: EUserActions.USERS_LIST
})

export const GetUserByIdAction = (id: number): IGetUserByIdAction => ({
  type: EUserActions.GET_USER_BY_ID,
  id
})

export const UpdateUserDetailAction = (
  user: IUser
): IUpdateUserDetailAction => ({
  type: EUserActions.UPDATE_USER_DETAIL,
  user
})

export const updateUsersListAction = (
  usersList: IUser[]
): IUpdateUsersAction => ({
  type: EUserActions.UPDATE_USERS_LIST,
  usersList
})
