import { IPagination } from 'interfaces/interfaces/IPayload'
import { IUser } from 'interfaces/interfaces/IUser'
import { IUpdateUserById } from 'interfaces/request/IUpdateUserById'
import { IUserListRequest } from 'interfaces/request/IUserListRequest'
import { EUserActions } from './EUserAction'
import {
  IGetUserByIdAction,
  IGetUsersAction,
  IUpdateUserByIdAction,
  IUpdateUserDetailAction,
  IUpdateUsersAction
} from './usersTypes'

export const getUsersListAction = (
  request: IUserListRequest
): IGetUsersAction => ({
  type: EUserActions.USERS_LIST,
  request
})

export const GetUserByIdAction = (id: number): IGetUserByIdAction => ({
  type: EUserActions.GET_USER_BY_ID,
  id
})

export const UpdateUserByIdAction = (
  user: IUpdateUserById
): IUpdateUserByIdAction => ({
  type: EUserActions.UPDATE_USER_BY_ID,
  user
})

export const UpdateUserDetailAction = (
  user: IUser
): IUpdateUserDetailAction => ({
  type: EUserActions.UPDATE_USER_DETAIL,
  user
})

export const updateUsersListAction = (
  usersList: IPagination<IUser[]>
): IUpdateUsersAction => ({
  type: EUserActions.UPDATE_USERS_LIST,
  usersList
})
