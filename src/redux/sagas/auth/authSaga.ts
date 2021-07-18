import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { ERoles } from 'interfaces/enums/ERoles'
import { ERROR_TYPE } from 'interfaces/enums/ErrorTypes'
import { ILoginResponse } from 'interfaces/interfaces/ILoginResponse'
import { INotification } from 'interfaces/interfaces/INotification'
import { IPayload } from 'interfaces/interfaces/IPayload'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { UpdateAuthAction } from 'redux/actions/auth/authAction'
import { EAuthTypes, ILoginAction } from 'redux/actions/auth/authTypes'
import {
  SetLoadingAction,
  SetNotificationAction
} from 'redux/actions/common/commonAction'
import { AuthApi } from 'services/api/auth/authApi'
import instance from 'services/api/v1'
import { checkStatus } from 'utils/services'

function* loginSaga(action: ILoginAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<ILoginResponse>> = yield call(
      AuthApi.login,
      action.loginRequest
    )

    const data = checkStatus<ILoginResponse>(response)
    if (data) {
      const roles = data.access.roles
      let checkRole = false
      roles.forEach((role) => {
        if (role.name === ERoles.ADMIN || role.name === ERoles.DEVELOPER) {
          checkRole = true
        }
      })
      if (checkRole) {
        yield put(SetNotificationAction(null))
        const accessToken = data.token.accessToken
        instance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`
        yield put(
          UpdateAuthAction(true, data.user.username, data.token.accessToken)
        )
      } else {
        const noti: INotification = {
          notiType: ERROR_TYPE.INVALID_CREDENTIALS,
          title: i18n.t('notification.error'),
          message: i18n.t('notification.messages.invalidRole')
        }
        yield put(SetNotificationAction(noti))
      }
    }
  } catch (error) {
    const noti: INotification = {
      notiType: error?.data?.errorType,
      title: i18n.t('notification.error'),
      message: error?.data?.message[0]
    }
    yield put(SetNotificationAction(noti))
  } finally {
    yield put(SetLoadingAction(false))
  }
}

export default function* authSaga() {
  yield all([takeLatest(EAuthTypes.LOGIN, loginSaga)])
}
