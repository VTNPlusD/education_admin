import { ILoginRequest } from 'interfaces/request/ILoginRequest'
import { LOGIN } from '..'
import instance from '../v1'

class AuthApis {
  login = (loginRequest: ILoginRequest) => instance.post(LOGIN, loginRequest)
}

export const AuthApi = new AuthApis()
