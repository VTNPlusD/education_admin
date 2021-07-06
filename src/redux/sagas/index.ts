import { all, fork } from 'redux-saga/effects'
import commonSaga from './common/commonSaga'
import authSaga from './auth/authSaga'
import usersSaga from './users/usersSaga'

export default function* rootSaga() {
  yield all([fork(commonSaga), fork(authSaga), fork(usersSaga)])
}
