import { LoginRequest } from 'services/requests/LoginRequest'
import { AuthTypes, LoginAction, UpdateAuthAction } from './authTypes'

export const loginAction = (loginRequest: LoginRequest): LoginAction => ({
  type: AuthTypes.LOGIN,
  loginRequest
})

export const updateAuth = (
  authed: boolean,
  email: string,
  accessToken: string
): UpdateAuthAction => ({
  type: AuthTypes.UPDATE_AUTH,
  authed,
  email,
  accessToken
})
