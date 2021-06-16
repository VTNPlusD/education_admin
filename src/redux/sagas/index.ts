import { all, fork } from 'redux-saga/effects'
import commonSaga from './common/commonSaga'
import authSaga from './auth/authSaga'

export default function* rootSaga() {
  yield all([fork(commonSaga), fork(authSaga)])
}
