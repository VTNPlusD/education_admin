import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { IPayload } from 'interfaces/interfaces/IPayload'
import { ISubject } from 'interfaces/interfaces/ISubject'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  removeSubjectClassDetailAction,
  setSubjectClassDetailAction,
  setUpdateSubjectAction
} from 'redux/actions/classes/classActions'
import {
  SetLoadingAction,
  SetNotificationAction
} from 'redux/actions/common/commonAction'
import { ESubjectActions } from 'redux/actions/subjects/ESubjectActions'
import { setSubjectDetailAction } from 'redux/actions/subjects/subjectActions'
import {
  IAddSubjectAction,
  IDeleteSubjectAction,
  IGetSubjectDetailAction,
  IUpdateSubjectAction
} from 'redux/actions/subjects/subjectTypes'
import { SubjectApi } from 'services/api/subjects/subjectApi'
import { checkStatus, errorNoti, successNoti } from 'utils/services'

function* addSubjectSaga(action: IAddSubjectAction) {
  try {
    const response: AxiosResponse<IPayload<ISubject>> = yield call(
      SubjectApi.addSubject,
      action.request
    )
    const data = checkStatus(response)
    if (data) {
      yield put(setSubjectClassDetailAction(data))
      const message = i18n.t('notification.messages.addSubjectSuccess')
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* deleteSubjectSaga(action: IDeleteSubjectAction) {
  try {
    const response: AxiosResponse<IPayload<ISubject>> = yield call(
      SubjectApi.deleteSubject,
      action.id
    )
    const data = checkStatus(response)
    if (data) {
      yield put(removeSubjectClassDetailAction(action.id))
      const message = i18n.t('notification.messages.deleteSubjectSuccess')
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* updateSubjectSaga(action: IUpdateSubjectAction) {
  try {
    const response: AxiosResponse<IPayload<ISubject>> = yield call(
      SubjectApi.updateSubject,
      action.subject
    )
    const data = checkStatus(response)
    if (data) {
      yield put(setUpdateSubjectAction(data))
      const message = i18n.t('notification.messages.updateSubjectSuccess')
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

function* getSubjectDetailSaga(action: IGetSubjectDetailAction) {
  try {
    const response: AxiosResponse<IPayload<ISubject>> = yield call(
      SubjectApi.getSubject,
      action.id
    )
    const data = checkStatus(response)
    if (data) {
      yield put(setSubjectDetailAction(data))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

export default function* subjectSagas() {
  yield all([
    takeLatest(ESubjectActions.ADD_SUBJECT, addSubjectSaga),
    takeLatest(ESubjectActions.DELETE_SUBJECT, deleteSubjectSaga),
    takeLatest(ESubjectActions.UPDATE_SUBJECT, updateSubjectSaga),
    takeLatest(ESubjectActions.GET_SUBJECT_DETAIL, getSubjectDetailSaga)
  ])
}
