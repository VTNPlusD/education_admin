import AdminLayoutContainer from 'containers/AdminLayoutContainer'
import AuthLayoutContainer from 'containers/AuthLayoutContainer'
import { connect } from 'react-redux'
import { Switch, withRouter } from 'react-router-dom'
import { authSelector } from 'selectors/authSelectors/authSelector'
import instance from 'services/api/v1'
import { ADMIN_ROUTE, routesName } from 'views/routes/routes'
import PrivateRoute from 'views/routes/PrivateRoute'
import PublicRoute from 'views/routes/PublicRoute'

type Props = {
  authed: boolean
  accessToken: string
}

const App = ({ authed, accessToken }: Props) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  return (
    <Switch>
      <PublicRoute
        authed={authed}
        path={routesName.LOGIN}
        component={AuthLayoutContainer}
      />
      <PrivateRoute
        authed={authed}
        path={ADMIN_ROUTE}
        component={AdminLayoutContainer}
      />
      <PublicRoute authed={authed} path='/' component={AuthLayoutContainer} />
    </Switch>
  )
}

export default withRouter(connect(authSelector)(App))
