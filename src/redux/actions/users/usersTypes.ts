import { IUser } from 'interfaces/IUser'
import { IUserList } from 'interfaces/IUserList'
import { Action } from 'redux'
import { IUserListRequest } from 'services/requests/IUserListRequest'
import { EUserActions } from './EUserAction'

export interface IUsersState {
  usersList: IUserList
  userDetail: IUser
}

export interface IGetUsersAction extends Action {
  type: EUserActions.USERS_LIST
  request: IUserListRequest
}

export interface IUpdateUsersAction extends Action {
  type: EUserActions.UPDATE_USERS_LIST
  usersList: IUserList
}

export interface IGetUserByIdAction extends Action {
  type: EUserActions.GET_USER_BY_ID
  id: number
}

export interface IUpdateUserDetailAction extends Action {
  type: EUserActions.UPDATE_USER_DETAIL
  user: IUser
}

export type UsersActionTypes =
  | IGetUsersAction
  | IUpdateUsersAction
  | IGetUserByIdAction
  | IUpdateUserDetailAction
