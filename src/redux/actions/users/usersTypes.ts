import { IPagination } from 'interfaces/interfaces/IPayload'
import { IUser } from 'interfaces/interfaces/IUser'
import { Action } from 'redux'
import { IUpdateUserById } from 'services/requests/IUpdateUserById'
import { IUserListRequest } from 'services/requests/IUserListRequest'
import { EUserActions } from './EUserAction'

export interface IUsersState {
  usersList: IPagination<IUser[]>
  userDetail: IUser
}

export interface IGetUsersAction extends Action {
  type: EUserActions.USERS_LIST
  request: IUserListRequest
}

export interface IUpdateUsersAction extends Action {
  type: EUserActions.UPDATE_USERS_LIST
  usersList: IPagination<IUser[]>
}

export interface IGetUserByIdAction extends Action {
  type: EUserActions.GET_USER_BY_ID
  id: number
}

export interface IUpdateUserByIdAction extends Action {
  type: EUserActions.UPDATE_USER_BY_ID
  user: IUpdateUserById
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
  | IUpdateUserByIdAction
