import { connect } from 'react-redux'
import { Switch, withRouter } from 'react-router-dom'
import { authSelector } from 'selectors/authSelectors/authSelector'
import AdminLayout from 'views/layouts/AdminLayout'
import AuthLayout from 'views/layouts/AuthLayout'
import PrivateRoute from 'views/routes/PrivateRoute'
import PublicRoute from 'views/routes/PublicRoute'
import './App.less'

type Props = {
  authed: boolean
}

const App = ({ authed }: Props) => {
  return (
    <Switch>
      <PublicRoute authed={authed} path='/login' component={AuthLayout} />
      <PrivateRoute authed={authed} path='/admin' component={AdminLayout} />
      <PublicRoute authed={authed} path='/' component={AuthLayout} />
    </Switch>
  )
}

export default withRouter(connect(authSelector)(App))
