import { AxiosResponse } from 'axios'
import { all, call, takeLatest } from 'redux-saga/effects'
import { AuthTypes, LoginAction } from 'redux/actions/auth/authTypes'
import { AuthApi } from 'services/api/auth/authApi'
import { checkStatus } from 'utils/services'

function* _authSaga(action: LoginAction) {
  try {
    const response: AxiosResponse<any> = yield call(
      AuthApi.login,
      action.loginRequest
    )
    const data = checkStatus(response)
    // handle response data
  } catch (error) {}
}

export default function* authSaga() {
  yield all([takeLatest(AuthTypes.LOGIN, _authSaga)])
}
