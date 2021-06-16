import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { loginAction } from 'redux/actions/auth/authAction'
import { authSelector } from 'selectors/authSelectors/authSelector'
import { LoginRequest } from 'services/requests/LoginRequest'
import AuthLayout from 'views/layouts/AuthLayout'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogin: (loginRequest: LoginRequest) =>
    dispatch(loginAction(loginRequest))
})

export default connect(authSelector, mapDispatchToProps)(AuthLayout)
