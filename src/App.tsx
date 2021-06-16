import AuthLayoutContainer from 'containers/AuthLayoutContainer'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import AdminLayout from 'views/layouts/AdminLayout'
import PrivateRoute from 'views/routes/PrivateRoute'
import PublicRoute from 'views/routes/PublicRoute'

const App = () => {
  const authed = false
  return (
    <Router>
      <Switch>
        <PublicRoute
          authed={authed}
          path='/login'
          component={AuthLayoutContainer}
        />
        <PrivateRoute authed={authed} path='/admin' component={AdminLayout} />
        <PublicRoute authed={authed} path='/' component={AuthLayoutContainer} />
      </Switch>
    </Router>
  )
}

export default App
