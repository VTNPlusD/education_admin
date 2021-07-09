import { ILoginRequest } from 'services/requests/ILoginRequest'
import {
  EAuthTypes,
  ILoginAction,
  ILogoutAction,
  IUpdateAuthAction
} from './authTypes'

export const LoginAction = (loginRequest: ILoginRequest): ILoginAction => ({
  type: EAuthTypes.LOGIN,
  loginRequest
})

export const UpdateAuthAction = (
  authed: boolean,
  email: string,
  accessToken: string
): IUpdateAuthAction => ({
  type: EAuthTypes.UPDATE_AUTH,
  authed,
  email,
  accessToken
})

export const LogoutAction = (): ILogoutAction => ({
  type: EAuthTypes.LOGOUT
})
