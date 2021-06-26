import { LoginRequest } from 'services/requests/LoginRequest'
import instance from '../v1'

class AuthApis {
  login = (loginRequest: LoginRequest) =>
    instance.post('/posts', { loginRequest })
}

export const AuthApi = new AuthApis()
