import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { ERoles } from 'interfaces/ERoles'
import { ERROR_TYPE } from 'interfaces/ErrorTypes'
import { ILogin } from 'interfaces/ILogin'
import { INotification } from 'interfaces/INotification'
import { IPayload } from 'interfaces/IPayload'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { updateAuthAction } from 'redux/actions/auth/authAction'
import { AuthTypes, LoginAction } from 'redux/actions/auth/authTypes'
import {
  setLoadingAction,
  setNotificationAction
} from 'redux/actions/common/commonAction'
import { AuthApi } from 'services/api/auth/authApi'
import instance from 'services/api/v1'
import { checkStatus } from 'utils/services'

function* _authSaga(action: LoginAction) {
  try {
    yield put(setLoadingAction(true))
    const response: AxiosResponse<IPayload<ILogin>> = yield call(
      AuthApi.login,
      action.loginRequest
    )

    const data = checkStatus<ILogin>(response)
    if (data) {
      const roles = data.access.roles
      let checkRole = false
      roles.forEach((role) => {
        if (role.name === ERoles.ADMIN || role.name === ERoles.DEVELOPER) {
          checkRole = true
        }
      })
      if (checkRole) {
        const accessToken = data.token.accessToken
        instance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`
        yield put(
          updateAuthAction(true, data.user.username, data.token.accessToken)
        )
      } else {
        const noti: INotification = {
          notiType: ERROR_TYPE.INVALID_CREDENTIALS,
          title: i18n.t('notification.error'),
          message: i18n.t('notification.messages.invalid_role')
        }
        yield put(setNotificationAction(noti))
      }
    }
  } catch (error) {
    const noti: INotification = {
      notiType: error?.data?.errorType,
      title: i18n.t('notification.error'),
      message: error?.data?.message[0]
    }
    yield put(setNotificationAction(noti))
  } finally {
    yield put(setLoadingAction(false))
  }
}

export default function* authSaga() {
  yield all([takeLatest(AuthTypes.LOGIN, _authSaga)])
}
