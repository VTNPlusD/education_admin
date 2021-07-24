import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { IPagination, IPayload } from 'interfaces/interfaces/IPayload'
import { IUpload } from 'interfaces/interfaces/IUpload'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  SetItemUploadAction,
  SetListUploadAction,
  SetLoadingAction,
  SetNotificationAction
} from 'redux/actions/common/commonAction'
import {
  IDeleteImageAction,
  IUploadAction
} from 'redux/actions/common/commonTypes'
import { ECommonActions } from 'redux/actions/common/ECommonAction'
import { CommonApi } from 'services/api/common/commonApi'
import { checkStatus, errorNoti, successNoti } from 'utils/services'

function* uploadSaga(action: IUploadAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IUpload>> = yield call(
      CommonApi.upload,
      action.file
    )
    const data = checkStatus(response)
    if (data) {
      yield put(SetItemUploadAction(data))
      action.callback(data)
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* getListUploadSaga() {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IPagination<IUpload[]>>> =
      yield call(CommonApi.getListUpload)
    const data = checkStatus(response)
    if (data) {
      yield put(SetListUploadAction(data.content))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* deleteImageSaga(action: IDeleteImageAction) {
  try {
    const response: AxiosResponse<IPayload<IUpload>> = yield call(
      CommonApi.deleteImage,
      action.name
    )
    const data = checkStatus(response)
    if (data) {
      const message = i18n.t('notification.messages.deleteImageSuccess')
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

export default function* commonSaga() {
  yield all([
    takeLatest(ECommonActions.UPLOAD, uploadSaga),
    takeLatest(ECommonActions.GET_LIST_UPLOAD, getListUploadSaga),
    takeLatest(ECommonActions.DELETE_IMAGE, deleteImageSaga)
  ])
}
