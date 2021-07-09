import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { INotification } from 'interfaces/INotification'
import { IPayload } from 'interfaces/IPayload'
import { IUser } from 'interfaces/IUser'
import { IUserList } from 'interfaces/IUserList'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  SetLoadingAction,
  SetNotificationAction
} from 'redux/actions/common/commonAction'
import { EUserActions } from 'redux/actions/users/EUserAction'
import {
  UpdateUserDetailAction,
  updateUsersListAction
} from 'redux/actions/users/usersAction'
import { IGetUserByIdAction, IGetUsersAction } from 'redux/actions/users/usersTypes'
import { UsersApi } from 'services/api/users/usersApi'
import { checkStatus } from 'utils/services'

function* getUsersListSaga(action: IGetUsersAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IUserList>> = yield call(
      UsersApi.getUsersList, action.request
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
    yield put(SetNotificationAction(noti))
  }
}

function* getUserByIdSaga(action: IGetUserByIdAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IUser>> = yield call(
      UsersApi.getUserById,
      action.id
    )
    const data = checkStatus(response)
    if (data) {
      yield put(UpdateUserDetailAction(data))
    }
  } catch (error) {
    const noti: INotification = {
      notiType: error?.data?.errorType,
      title: i18n.t('notification.error'),
      message: error?.data?.message[0]
    }
    yield put(SetNotificationAction(noti))
  }
}

export default function* usersSaga() {
  yield all([
    takeLatest(EUserActions.USERS_LIST, getUsersListSaga),
    takeLatest(EUserActions.GET_USER_BY_ID, getUserByIdSaga)
  ])
}
