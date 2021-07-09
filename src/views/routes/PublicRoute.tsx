import React from 'react'
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  withRouter
} from 'react-router-dom'
import { ADMIN_ROUTE, routesName } from 'views/routes/routes'

type Props = RouteComponentProps & {
  authed: boolean
  path: RouteProps['path']
  component: React.ComponentType<any>
}

const PublicRoute = ({
  component: Component,
  authed,
  path,
  ...rest
}: Props) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: ADMIN_ROUTE.concat(routesName.DASHBOARD),
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default withRouter(PublicRoute)
