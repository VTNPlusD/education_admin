import { ILoginRequest } from 'services/requests/LoginRequest'
import {
  AuthTypes,
  ILoginAction,
  ILogoutAction,
  IUpdateAuthAction
} from './authTypes'

export const LoginAction = (loginRequest: ILoginRequest): ILoginAction => ({
  type: AuthTypes.LOGIN,
  loginRequest
})

export const UpdateAuthAction = (
  authed: boolean,
  email: string,
  accessToken: string
): IUpdateAuthAction => ({
  type: AuthTypes.UPDATE_AUTH,
  authed,
  email,
  accessToken
})

export const LogoutAction = (): ILogoutAction => ({
  type: AuthTypes.LOGOUT
})
