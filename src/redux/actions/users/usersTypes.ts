import { Action } from 'redux'
import { IUser } from 'interfaces/IUser'

export interface UsersState {
  usersList: IUser[]
}

export enum UsersTypes {
  USERS_LIST = 'USERS_LIST'
}

export interface UsersAction extends Action {
  type: UsersTypes.USERS_LIST
}
