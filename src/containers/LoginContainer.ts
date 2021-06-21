import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { loginAction } from 'redux/actions/auth/authAction'
import { authSelector } from 'selectors/authSelectors/authSelector'
import { LoginRequest } from 'services/requests/LoginRequest'
import Login from 'views/pages/Login'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogin: (loginRequest: LoginRequest) =>
    dispatch(loginAction(loginRequest))
})

export default connect(authSelector, mapDispatchToProps)(Login)
