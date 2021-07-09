import { Action } from 'redux'
import { ILoginRequest } from 'services/requests/LoginRequest'

export interface IAuthState {
  authed: boolean
  email: string
  accessToken: string
}

export enum AuthTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  UPDATE_AUTH = 'UPDATE_AUTH'
}

export interface ILoginAction extends Action {
  type: AuthTypes.LOGIN
  loginRequest: ILoginRequest
}

export interface IUpdateAuthAction extends Action {
  type: AuthTypes.UPDATE_AUTH
  authed: boolean
  email: string
  accessToken: string
}

export interface ILogoutAction extends Action {
  type: AuthTypes.LOGOUT
}

export type AuthActionTypes = ILoginAction | IUpdateAuthAction | ILogoutAction
