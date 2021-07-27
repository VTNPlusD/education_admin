import { AxiosResponse } from 'axios'
import { ILesson } from 'interfaces/interfaces/ILesson'
import { IPagination, IPayload } from 'interfaces/interfaces/IPayload'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  SetLoadingAction,
  SetNotificationAction
} from 'redux/actions/common/commonAction'
import { ELessonActions } from 'redux/actions/lessons/ELessonActions'
import { setListLessonAction } from 'redux/actions/lessons/lessonActions'
import { IListLessonAction } from 'redux/actions/lessons/lessonTypes'
import { LessonApi } from 'services/api/lessons/lessonApi'
import { checkStatus, errorNoti } from 'utils/services'

function* listLessonSaga(action: IListLessonAction) {
  try {
    const response: AxiosResponse<IPayload<IPagination<ILesson[]>>> =
      yield call(LessonApi.listLesson, action.request)
    const data = checkStatus(response)
    if (data) {
      yield put(setListLessonAction(data))
    } else {
      yield put(SetNotificationAction(errorNoti(response)))
    }
  } finally {
    yield put(SetLoadingAction(false))
  }
}

export default function* lessonSaga() {
  yield all([takeLatest(ELessonActions.LIST_LESSON, listLessonSaga)])
}
