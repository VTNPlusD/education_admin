import LoginContainer from 'containers/LoginContainer'
import NotificationContainer from 'containers/NotificationContainer'

const AuthLayout = () => {
  return (
    <>
      <NotificationContainer />
      <LoginContainer />
    </>
  )
}

export default AuthLayout
