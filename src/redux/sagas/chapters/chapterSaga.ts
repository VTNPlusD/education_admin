import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { IChapter } from 'interfaces/interfaces/IChapter'
import { IPagination, IPayload } from 'interfaces/interfaces/IPayload'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  setChapterAction,
  setListChapterAction,
  setUpdateChapterAction
} from 'redux/actions/chapters/chapterActions'
import {
  IAddChapterAction,
  IDeleteChapterAction,
  IGetChapterAction,
  IListChapterAction,
  IUpdateChapterAction
} from 'redux/actions/chapters/chapterTypes'
import { EChapterActions } from 'redux/actions/chapters/EChapterActions'
import { SetNotificationAction } from 'redux/actions/common/commonAction'
import { chapterApi } from 'services/api/chapters/chapterApi'
import { checkStatus, errorNoti, successNoti } from 'utils/services'

function* listChapterBySubjectIdSaga(action: IListChapterAction) {
  try {
    const response: AxiosResponse<IPayload<IPagination<IChapter[]>>> =
      yield call(chapterApi.listChapter, action.request)
    const data = checkStatus(response)
    if (data) {
      yield put(setListChapterAction(data))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
  }
}

function* addChapterSaga(action: IAddChapterAction) {
  try {
    const response: AxiosResponse<IPayload<IChapter>> = yield call(
      chapterApi.addChapter,
      action.request
    )
    const data = checkStatus(response)
    if (data) {
      action.callback()
      const message = i18n.t('notification.messages.addChapterSuccess')
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
  }
}

function* deleteChapterSaga(action: IDeleteChapterAction) {
  try {
    const response: AxiosResponse<IPayload<string>> = yield call(
      chapterApi.deleteChapter,
      action.id
    )
    const data = checkStatus(response)
    if (data) {
      action.callback()
      const message = i18n.t('notification.messages.addChapterSuccess')
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
  }
}

function* updateChapterSaga(action: IUpdateChapterAction) {
  try {
    const response: AxiosResponse<IPayload<IChapter>> = yield call(
      chapterApi.updateChapter,
      action.chapter
    )
    const data = checkStatus(response)
    if (data) {
      yield put(setUpdateChapterAction(data))
      const message = i18n.t('notification.messages.updateChapterSuccess')
      yield put(SetNotificationAction(successNoti(message)))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
  }
}

function* getChapterSaga(action: IGetChapterAction) {
  try {
    const response: AxiosResponse<IPayload<IChapter>> = yield call(
      chapterApi.getChapter,
      action.id
    )
    const data = checkStatus(response)
    if (data) {
      yield put(setChapterAction(data))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
  }
}

export default function* chapterSaga() {
  yield all([
    takeLatest(EChapterActions.LIST_CHAPTER, listChapterBySubjectIdSaga),
    takeLatest(EChapterActions.ADD_CHAPTER, addChapterSaga),
    takeLatest(EChapterActions.DELETE_CHAPTER, deleteChapterSaga),
    takeLatest(EChapterActions.UPDATE_CHAPTER, updateChapterSaga),
    takeLatest(EChapterActions.GET_CHAPTER, getChapterSaga)
  ])
}
