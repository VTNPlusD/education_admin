import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { INotification } from 'interfaces/interfaces/INotification'
import { IPayload } from 'interfaces/interfaces/IPayload'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  SetLoadingAction,
  SetNotificationAction
} from 'redux/actions/common/commonAction'
import { IUploadAction } from 'redux/actions/common/commonTypes'
import { ECommonActions } from 'redux/actions/common/ECommonAction'
import { CommonApi } from 'services/api/common/commonApi'
import { checkStatus } from 'utils/services'

function* uploadSaga(action: IUploadAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<any> = yield call(
      CommonApi.upload,
      action.file
    )
    // console.log('aa', response)
    const data = checkStatus(response)
    if (data) {
      action.callback(data)
      return data
    }
  } catch (error) {
    const noti: INotification = {
      notiType: error?.errorType,
      title: i18n.t('notification.error'),
      message: error?.message[0]
    }
    yield put(SetNotificationAction(noti))
  } finally {
    yield put(SetLoadingAction(false))
  }
}

export default function* commonSaga() {
  yield all([takeLatest(ECommonActions.UPLOAD, uploadSaga)])
}
