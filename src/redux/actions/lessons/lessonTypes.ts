import { ILesson } from 'interfaces/interfaces/ILesson'
import { IPagination } from 'interfaces/interfaces/IPayload'
import { IListRequest } from 'interfaces/request/IListRequest'
import { Action } from 'redux'
import { ELessonActions } from './ELessonActions'

export interface IListLessonAction extends Action {
  type: ELessonActions.LIST_LESSON
  request: IListRequest
}

export interface ISetListLessonAction extends Action {
  type: ELessonActions.SET_LIST_LESSON
  listLesson: IPagination<ILesson[]>
}

export type LessonActionTypes = IListLessonAction | ISetListLessonAction
