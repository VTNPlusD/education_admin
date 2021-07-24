import { ISubject } from 'interfaces/interfaces/ISubject'
import { Action } from 'redux'
import { IAddSubjectRequest } from 'services/requests/IAddSubjectRequest'
import { ESubjectActions } from './ESubjectActions'

export interface ISubjectState {
  subjectDetail: ISubject
}

export interface IAddSubjectAction extends Action {
  type: ESubjectActions.ADD_SUBJECT
  request: IAddSubjectRequest
}

export interface IDeleteSubjectAction extends Action {
  type: ESubjectActions.DELETE_SUBJECT
  id: number
}

export interface IUpdateSubjectAction extends Action {
  type: ESubjectActions.UPDATE_SUBJECT
  subject: ISubject
}

export interface IGetSubjectDetailAction extends Action {
  type: ESubjectActions.GET_SUBJECT_DETAIL
  id: number
}

export interface ISetSubjectDetailAction extends Action {
  type: ESubjectActions.SET_SUBJECT_DETAIL
  subject: ISubject
}

export type SubjectActionTypes =
  | IAddSubjectAction
  | IDeleteSubjectAction
  | IUpdateSubjectAction
  | IGetSubjectDetailAction
  | ISetSubjectDetailAction
