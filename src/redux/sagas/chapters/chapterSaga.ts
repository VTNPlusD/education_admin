import { AxiosResponse } from 'axios'
import { IChapter } from 'interfaces/interfaces/IChapter'
import { IPagination, IPayload } from 'interfaces/interfaces/IPayload'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { setListChapterAction } from 'redux/actions/chapters/chapterActions'
import {
  IAddChapterAction,
  IListChapterAction
} from 'redux/actions/chapters/chapterTypes'
import { EChapterActions } from 'redux/actions/chapters/EChapterActions'
import { SetNotificationAction } from 'redux/actions/common/commonAction'
import { chapterApi } from 'services/api/chapters/chapterApi'
import { checkStatus, errorNoti, successNoti } from 'utils/services'
import i18n from 'configs/i18n'

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

export default function* chapterSaga() {
  yield all([
    takeLatest(EChapterActions.LIST_CHAPTER, listChapterBySubjectIdSaga),
    takeLatest(EChapterActions.ADD_CHAPTER, addChapterSaga)
  ])
}
