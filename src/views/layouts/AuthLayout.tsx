import React from 'react'
import { LoginRequest } from 'services/requests/LoginRequest'

type Props = {
  handleLogin: (loginRequest: LoginRequest) => void
  authed: boolean
}

const AuthLayout: React.FC<Props> = ({ authed, handleLogin }) => {
  const _setLoading = () => {
    const loginRequest: LoginRequest = {
      username: 'root',
      password: 'root'
    }
    handleLogin(loginRequest)
  }

  return (
    <div>
      <button onClick={_setLoading}>LOGIN</button>
    </div>
  )
}

export default AuthLayout
