import { AxiosResponse } from 'axios'
import { ERROR_CODES } from 'interfaces/ErrorTypes'
import { INotification } from 'interfaces/INotification'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { updateAuthAction } from 'redux/actions/auth/authAction'
import { AuthTypes, LoginAction } from 'redux/actions/auth/authTypes'
import {
  setLoadingAction,
  setNotificationAction
} from 'redux/actions/common/commonAction'
import { AuthApi } from 'services/api/auth/authApi'
import { checkStatus } from 'utils/services'
import i18n from 'configs/i18n'

function* _authSaga(action: LoginAction) {
  try {
    yield put(setLoadingAction(true))
    const response: AxiosResponse<any> = yield call(
      AuthApi.login,
      action.loginRequest
    )
    const data = checkStatus(response)
    if (
      data &&
      action.loginRequest.username === 'root' &&
      action.loginRequest.password === 'root'
    ) {
      yield put(updateAuthAction(true, 'root', 'root'))
    } else {
      const noti: INotification = {
        notiType: ERROR_CODES.UNAUTHENTICATED,
        title: i18n.t('notification.error'),
        message: i18n.t('validation.login_form.incorrect')
      }
      yield put(setNotificationAction(noti))
    }
  } catch (error) {
    const noti: INotification = {
      notiType: error?.errorType,
      title: i18n.t('notification.error'),
      message: error?.message
    }
    yield put(setNotificationAction(noti))
  } finally {
    yield put(setLoadingAction(false))
  }
}

export default function* authSaga() {
  yield all([takeLatest(AuthTypes.LOGIN, _authSaga)])
}
