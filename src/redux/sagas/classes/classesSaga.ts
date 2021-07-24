import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { IClass } from 'interfaces/interfaces/IClass'
import { IPagination, IPayload } from 'interfaces/interfaces/IPayload'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  setClassAction,
  setClassDetailAction,
  setUpdateClassAction,
  updateClassesListAction
} from 'redux/actions/classes/classActions'
import {
  IAddClassAction,
  IDeleteClassAction,
  IGetClassDetailAction,
  IGetClassListAction,
  IUpdateClassAction
} from 'redux/actions/classes/classTypes'
import { EClassesAction } from 'redux/actions/classes/EClassActions'
import {
  SetLoadingAction,
  SetNotificationAction
} from 'redux/actions/common/commonAction'
import { ClassesApi } from 'services/api/classes/classesApi'
import { checkStatus, errorNoti, successNoti } from 'utils/services'

function* getClassesListSaga(action: IGetClassListAction) {
  try {
    yield put(SetLoadingAction(true))
    const response: AxiosResponse<IPayload<IPagination<IClass[]>>> = yield call(
      ClassesApi.getClassesList,
      action.request
    )
    const data = checkStatus(response)
    if (data) {
      yield put(updateClassesListAction(data.content))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
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
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* updateClassSaga(action: IUpdateClassAction) {
  try {
    const response: AxiosResponse<IPayload<IClass>> = yield call(
      ClassesApi.updateClass,
      action.request
    )
    const data = checkStatus(response)
    if (data) {
      const message = i18n.t('notification.messages.updateClassSuccess')
      yield put(setUpdateClassAction(data))
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
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
      const message = i18n.t('notification.messages.deleteClassSuccess')
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* getClassDetailSaga(action: IGetClassDetailAction) {
  try {
    const response: AxiosResponse<IPayload<IClass>> = yield call(
      ClassesApi.getClassDetail,
      action.id
    )
    const data = checkStatus(response)
    if (data) {
      yield put(setClassDetailAction(data))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

export default function* classesSaga() {
  yield all([
    takeLatest(EClassesAction.LIST_CLASSES, getClassesListSaga),
    takeLatest(EClassesAction.ADD_CLASS, addClassSaga),
    takeLatest(EClassesAction.DELETE_CLASS, deleteClassSaga),
    takeLatest(EClassesAction.UPDATE_CLASS, updateClassSaga),
    takeLatest(EClassesAction.GET_CLASS_DETAIL, getClassDetailSaga)
  ])
}
