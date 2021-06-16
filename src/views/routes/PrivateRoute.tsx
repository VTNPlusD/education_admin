import React from 'react'
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  withRouter
} from 'react-router-dom'

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
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default withRouter(PrivateRoute)
