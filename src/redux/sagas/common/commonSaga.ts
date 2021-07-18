import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { ESuccessType } from 'interfaces/enums/ESuccessType'
import { INotification } from 'interfaces/interfaces/INotification'
import { IPayload } from 'interfaces/interfaces/IPayload'
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
import { checkStatus } from 'utils/services'

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

function* getListUploadSaga() {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IUpload[]>> = yield call(
      CommonApi.getListUpload
    )
    const data = checkStatus(response)
    if (data) {
      yield put(SetListUploadAction(data))
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

function* deleteImageSaga(action: IDeleteImageAction) {
  try {
    const response: AxiosResponse<IPayload<IUpload>> = yield call(
      CommonApi.deleteImage,
      action.name
    )
    const data = checkStatus(response)
    if (data) {
      const noti: INotification = {
        notiType: ESuccessType.SUCCESS,
        title: i18n.t('notification.success'),
        message: i18n.t('notification.messages.deleteImageSuccess')
      }
      yield put(SetNotificationAction(noti))
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
  yield all([
    takeLatest(ECommonActions.UPLOAD, uploadSaga),
    takeLatest(ECommonActions.GET_LIST_UPLOAD, getListUploadSaga),
    takeLatest(ECommonActions.DELETE_IMAGE, deleteImageSaga)
  ])
}
