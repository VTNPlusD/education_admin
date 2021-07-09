import { Action } from 'redux'
import { IUser } from 'interfaces/IUser'
import { EUserActions } from './EUserAction'

export interface IUsersState {
  usersList: IUser[]
  userDetail: IUser
}

export interface IGetUsersAction extends Action {
  type: EUserActions.USERS_LIST
}

export interface IUpdateUsersAction extends Action {
  type: EUserActions.UPDATE_USERS_LIST
  usersList: IUser[]
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
