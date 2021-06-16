import { AxiosResponse } from 'axios'
import { all, call, takeLatest } from 'redux-saga/effects'
import { CommonTypes } from 'redux/actions/common/commonTypes'
import { CommonApi } from 'services/api/common/commonApi'

function* commonSaga() {
  try {
    const response: AxiosResponse<any> = yield call([
      CommonApi,
      CommonApi.getUser
    ])
    console.log('res', response)
  } catch (error) {}
}

export default function* saga() {
  yield all([takeLatest(CommonTypes.SET_LOADING, commonSaga)])
}
