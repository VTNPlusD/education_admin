import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { loginAction } from 'redux/actions/auth/authAction'
import { commonSelector } from 'selectors/commonSelectors/commonSelector'
import { LoginRequest } from 'services/requests/LoginRequest'
import Login from 'views/pages/Login'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogin: (loginRequest: LoginRequest) =>
    dispatch(loginAction(loginRequest))
})

export default connect(commonSelector, mapDispatchToProps)(Login)
