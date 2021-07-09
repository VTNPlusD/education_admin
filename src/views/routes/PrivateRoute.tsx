import React from 'react'
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  withRouter
} from 'react-router-dom'
import { routesName } from 'views/routes/routes'

type Props = RouteComponentProps & {
  authed: boolean
  path: RouteProps['path']
  component: React.ComponentType<any>
}

const PrivateRoute = ({
  component: Component,
  authed,
  path,
  ...rest
}: Props) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: routesName.LOGIN, state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default withRouter(PrivateRoute)
