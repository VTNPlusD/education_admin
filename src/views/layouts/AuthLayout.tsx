import Notification from 'components/notification/Notification'
import LoginContainer from 'containers/LoginContainer'
import { INotification } from 'interfaces/INotification'

type Props = {
  notification?: INotification
}

const AuthLayout = ({ notification }: Props) => {
  return (
    <>
      <Notification notifications={notification} />
      <LoginContainer />
    </>
  )
}

export default AuthLayout
