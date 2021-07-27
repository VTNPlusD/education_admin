import { ILesson } from 'interfaces/interfaces/ILesson'
import { IPagination } from 'interfaces/interfaces/IPayload'
import { IListRequest } from 'interfaces/request/IListRequest'
import { ELessonActions } from './ELessonActions'
import { IListLessonAction, ISetListLessonAction } from './lessonTypes'

export const listLessonAction = (request: IListRequest): IListLessonAction => ({
  type: ELessonActions.LIST_LESSON,
  request
})

export const setListLessonAction = (
  listLesson: IPagination<ILesson[]>
): ISetListLessonAction => ({
  type: ELessonActions.SET_LIST_LESSON,
  listLesson
})
