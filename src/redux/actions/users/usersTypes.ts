import { Action } from 'redux'
import { IUser } from 'interfaces/IUser'
import { EUserActions } from './EUserAction'

export interface UsersState {
  usersList: IUser[]
  userDetail: IUser
}

export interface GetUsersAction extends Action {
  type: EUserActions.USERS_LIST
}

export interface UpdateUsersAction extends Action {
  type: EUserActions.UPDATE_USERS_LIST
  usersList: IUser[]
}

export interface GetUserByIdAction extends Action {
  type: EUserActions.GET_USER_BY_ID
  id: number
}

export interface UpdateUserDetailAction extends Action {
  type: EUserActions.UPDATE_USER_DETAIL
  user: IUser
}

export type UsersActionTypes =
  | GetUsersAction
  | UpdateUsersAction
  | GetUserByIdAction
  | UpdateUserDetailAction
