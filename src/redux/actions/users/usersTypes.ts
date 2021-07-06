import { Action } from 'redux'
import { IUser } from 'interfaces/IUser'

export interface UsersState {
  usersList: IUser[]
}

export enum UsersTypes {
  USERS_LIST = 'USERS_LIST',
  UPDATE_USERS_LIST = 'UPDATE_USERS_LIST'
}

export interface GetUsersAction extends Action {
  type: UsersTypes.USERS_LIST
}

export interface UpdateUsersAction extends Action {
  type: UsersTypes.UPDATE_USERS_LIST
  usersList: IUser[]
}

export type UsersActionTypes = GetUsersAction | UpdateUsersAction
