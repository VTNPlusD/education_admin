import { all, fork } from 'redux-saga/effects'
import authSaga from './auth/authSaga'
import classesSaga from './classes/classesSaga'
import commonSaga from './common/commonSaga'
import subjectSagas from './subjects/subjectSagas'
import usersSaga from './users/usersSaga'

export default function* rootSaga() {
  yield all([
    fork(commonSaga),
    fork(authSaga),
    fork(usersSaga),
    fork(classesSaga),
    fork(subjectSagas)
  ])
}
