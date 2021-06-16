import { LoginRequest } from 'services/requests/LoginRequest'
import instance from '../v1'

class _AuthApi {
  login = (loginRequest: LoginRequest) =>
    instance.post('/posts', { loginRequest })
}

export const AuthApi = new _AuthApi()
