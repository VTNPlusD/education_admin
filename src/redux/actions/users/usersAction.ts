import { IUser } from 'interfaces/IUser'
import { IUserList } from 'interfaces/IUserList'
import { IUserListRequest } from 'services/requests/IUserListRequest'
import { EUserActions } from './EUserAction'
import {
  IGetUserByIdAction,
  IGetUsersAction,
  IUpdateUserDetailAction,
  IUpdateUsersAction
} from './usersTypes'

export const getUsersListAction = (request: IUserListRequest): IGetUsersAction => ({
  type: EUserActions.USERS_LIST,
  request
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
  usersList: IUserList
): IUpdateUsersAction => ({
  type: EUserActions.UPDATE_USERS_LIST,
  usersList
})
