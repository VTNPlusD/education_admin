import { BrowserRouter as Router, Switch } from 'react-router-dom'
import AdminLayout from 'views/layouts/AdminLayout'
import AuthLayout from 'views/layouts/AuthLayout'
import PrivateRoute from 'views/routes/PrivateRoute'
import PublicRoute from 'views/routes/PublicRoute'

const App = () => {
  const authed = false;
  return (
    <Router>
      <Switch>
        <PublicRoute authed={authed} path="/login" component={AuthLayout} />
        <PrivateRoute authed={authed} path='/admin' component={AdminLayout} />
        <PublicRoute authed={authed} path="/" component={AuthLayout} />
      </Switch>
    </Router>
  )
}

export default App
