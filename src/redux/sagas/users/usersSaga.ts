import { AxiosResponse } from 'axios'
import { IPayload } from 'interfaces/IPayload'
import { IUser } from 'interfaces/IUser'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { setLoadingAction } from 'redux/actions/common/commonAction'
import { UsersTypes } from 'redux/actions/users/usersTypes'
import { UsersApi } from 'services/api/users/usersApi'

function* _usersListSaga() {
  try {
    yield put(setLoadingAction(true))
    const response: AxiosResponse<IPayload<IUser[]>> = yield call(
      UsersApi.getUsersList
    )
    console.log(response)
  } catch (error) {
    console.log('eee', error)
  }
}

export default function* usersSaga() {
  yield all([takeLatest(UsersTypes.USERS_LIST, _usersListSaga)])
}
