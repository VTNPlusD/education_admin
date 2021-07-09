import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { LoginAction } from 'redux/actions/auth/authAction'
import { commonSelector } from 'selectors/commonSelectors/commonSelector'
import { ILoginRequest } from 'services/requests/LoginRequest'
import Login from 'views/pages/Login'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogin: (loginRequest: ILoginRequest) =>
    dispatch(LoginAction(loginRequest))
})

export default connect(commonSelector, mapDispatchToProps)(Login)
