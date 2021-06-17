import React from 'react'
import { LoginRequest } from 'services/requests/LoginRequest'
import Login from 'views/pages/Login'

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
      <Login />
    </div>
  )
}

export default AuthLayout
