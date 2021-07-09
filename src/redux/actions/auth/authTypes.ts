import { Action } from 'redux'
import { ILoginRequest } from 'services/requests/ILoginRequest'

export interface IAuthState {
  authed: boolean
  email: string
  accessToken: string
}

export enum EAuthTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  UPDATE_AUTH = 'UPDATE_AUTH'
}

export interface ILoginAction extends Action {
  type: EAuthTypes.LOGIN
  loginRequest: ILoginRequest
}

export interface IUpdateAuthAction extends Action {
  type: EAuthTypes.UPDATE_AUTH
  authed: boolean
  email: string
  accessToken: string
}

export interface ILogoutAction extends Action {
  type: EAuthTypes.LOGOUT
}

export type AuthActionTypes = ILoginAction | IUpdateAuthAction | ILogoutAction
