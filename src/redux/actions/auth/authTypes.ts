import { Action } from 'redux'
import { LoginRequest } from 'services/requests/LoginRequest'

export interface AuthState {
  authed: boolean
  email: string
  accessToken: string
}

export enum AuthTypes {
  LOGIN = 'LOGIN',
  UPDATE_AUTH = 'UPDATE_AUTH'
}

export interface LoginAction extends Action {
  type: AuthTypes.LOGIN
  loginRequest: LoginRequest
}

export interface UpdateAuthAction extends Action {
  type: AuthTypes.UPDATE_AUTH
  authed: boolean
  email: string
  accessToken: string
}

export type AuthActionTypes = LoginAction | UpdateAuthAction
