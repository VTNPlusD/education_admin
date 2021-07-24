import { ISubject } from 'interfaces/interfaces/ISubject'
import { IAddSubjectRequest } from 'services/requests/IAddSubjectRequest'
import { ESubjectActions } from './ESubjectActions'
import {
  IAddSubjectAction,
  IDeleteSubjectAction,
  IGetSubjectDetailAction,
  ISetSubjectDetailAction,
  IUpdateSubjectAction
} from './subjectTypes'

export const addSubjectAction = (
  request: IAddSubjectRequest
): IAddSubjectAction => ({
  type: ESubjectActions.ADD_SUBJECT,
  request
})

export const deleteSubjectAction = (id: number): IDeleteSubjectAction => ({
  type: ESubjectActions.DELETE_SUBJECT,
  id
})

export const updateSubjectAction = (
  subject: ISubject
): IUpdateSubjectAction => ({
  type: ESubjectActions.UPDATE_SUBJECT,
  subject
})

export const getSubjectDetailAction = (
  id: number
): IGetSubjectDetailAction => ({
  type: ESubjectActions.GET_SUBJECT_DETAIL,
  id
})

export const setSubjectDetailAction = (
  subject: ISubject
): ISetSubjectDetailAction => ({
  type: ESubjectActions.SET_SUBJECT_DETAIL,
  subject
})
