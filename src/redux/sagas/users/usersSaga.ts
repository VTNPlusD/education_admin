import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { INotification } from 'interfaces/INotification'
import { IPayload } from 'interfaces/IPayload'
import { IUser } from 'interfaces/IUser'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  setLoadingAction,
  setNotificationAction
} from 'redux/actions/common/commonAction'
import { updateUsersListAction } from 'redux/actions/users/usersAction'
import { UsersTypes } from 'redux/actions/users/usersTypes'
import { UsersApi } from 'services/api/users/usersApi'
import { checkStatus } from 'utils/services'

function* _usersListSaga() {
  try {
    yield put(setLoadingAction(true))
    const response: AxiosResponse<IPayload<IUser[]>> = yield call(
      UsersApi.getUsersList
    )
    const data = checkStatus(response)
    if (data) {
      yield put(updateUsersListAction(data))
    }
  } catch (error) {
    const noti: INotification = {
      notiType: error?.data?.errorType,
      title: i18n.t('notification.error'),
      message: error?.data?.message[0]
    }
    yield put(setNotificationAction(noti))
  }
}

export default function* usersSaga() {
  yield all([takeLatest(UsersTypes.USERS_LIST, _usersListSaga)])
}
