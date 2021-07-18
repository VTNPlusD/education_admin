import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { ESuccessType } from 'interfaces/enums/ESuccessType'
import { IClass } from 'interfaces/interfaces/IClass'
import { INotification } from 'interfaces/interfaces/INotification'
import { IPayload } from 'interfaces/interfaces/IPayload'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  setClassAction,
  updateClassesListAction
} from 'redux/actions/classes/classesAction'
import {
  IAddClassAction,
  IDeleteClassAction,
  IGetClassListAction
} from 'redux/actions/classes/classesTypes'
import { EClassesAction } from 'redux/actions/classes/EClassesAction'
import {
  SetLoadingAction,
  SetNotificationAction
} from 'redux/actions/common/commonAction'
import { ClassesApi } from 'services/api/classes/classesApi'
import { checkStatus } from 'utils/services'

function* getClassesListSaga(action: IGetClassListAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IClass[]>> = yield call(
      ClassesApi.getClassesList,
      action.request
    )
    const data = checkStatus(response)
    if (data) {
      yield put(updateClassesListAction(data))
    }
  } catch (error) {
    const noti: INotification = {
      notiType: error?.data?.errorType,
      title: i18n.t('notification.error'),
      message: error?.data?.message[0]
    }
    yield put(SetNotificationAction(noti))
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* addClassSaga(action: IAddClassAction) {
  try {
    const response: AxiosResponse<IPayload<IClass>> = yield call(
      ClassesApi.addClass,
      action.request
    )
    const data = checkStatus(response)
    if (data) {
      yield put(setClassAction(data))
    }
  } catch (error) {
    const noti: INotification = {
      notiType: error?.data?.errorType,
      title: i18n.t('notification.error'),
      message: error?.data?.message[0]
    }
    yield put(SetNotificationAction(noti))
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* deleteClassSaga(action: IDeleteClassAction) {
  try {
    const response: AxiosResponse<IPayload<IClass>> = yield call(
      ClassesApi.deleteClass,
      action.id
    )
    const data = checkStatus(response)
    if (data) {
      const noti: INotification = {
        notiType: ESuccessType.SUCCESS,
        title: i18n.t('notification.success'),
        message: i18n.t('notification.messages.deleteClassSuccess')
      }
      yield put(SetNotificationAction(noti))
    }
  } catch (error) {
    const noti: INotification = {
      notiType: error?.data?.errorType,
      title: i18n.t('notification.error'),
      message: error?.data?.message[0]
    }
    yield put(SetNotificationAction(noti))
  } finally {
    yield put(SetLoadingAction(false))
  }
}

export default function* classesSaga() {
  yield all([
    takeLatest(EClassesAction.LIST_CLASSES, getClassesListSaga),
    takeLatest(EClassesAction.ADD_CLASS, addClassSaga),
    takeLatest(EClassesAction.DELETE_CLASS, deleteClassSaga)
  ])
}
