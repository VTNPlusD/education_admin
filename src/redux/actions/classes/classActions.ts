import { IClass } from 'interfaces/interfaces/IClass'
import { ISubject } from 'interfaces/interfaces/ISubject'
import { IAddClassRequest } from 'services/requests/IAddClassRequest'
import { IClassListRequest } from 'services/requests/IClassesListRequest'
import {
  IAddClassAction,
  IDeleteClassAction,
  IGetClassDetailAction,
  IGetClassListAction,
  IRemoveSubjectClassDetail,
  ISetClassAction,
  ISetClassDetailAction,
  ISetSubjectClassDetail,
  ISetUpdateClassAction,
  ISetUpdateSubject,
  IUpdateClassAction,
  IUpdateClassListAction
} from './classTypes'
import { EClassesAction } from './EClassActions'

export const getClassesListAction = (
  request?: IClassListRequest
): IGetClassListAction => ({
  type: EClassesAction.LIST_CLASSES,
  request
})

export const addClassAction = (request: IAddClassRequest): IAddClassAction => ({
  type: EClassesAction.ADD_CLASS,
  request
})

export const deleteClassAction = (id: number): IDeleteClassAction => ({
  type: EClassesAction.DELETE_CLASS,
  id
})

export const updateClassAction = (request: IClass): IUpdateClassAction => ({
  type: EClassesAction.UPDATE_CLASS,
  request
})

export const getClassDetailAction = (id: number): IGetClassDetailAction => ({
  type: EClassesAction.GET_CLASS_DETAIL,
  id
})

export const setClassDetailAction = (
  classDetail: IClass
): ISetClassDetailAction => ({
  type: EClassesAction.SET_CLASS_DETAIL,
  classDetail
})

export const setSubjectClassDetailAction = (
  subject: ISubject
): ISetSubjectClassDetail => ({
  type: EClassesAction.SET_SUBJECT_CLASS_DETAIL,
  subject
})

export const setUpdateClassAction = (
  request: IClass
): ISetUpdateClassAction => ({
  type: EClassesAction.SET_UPDATE_CLASS,
  request
})

export const setClassAction = (item: IClass): ISetClassAction => ({
  type: EClassesAction.SET_CLASS,
  item
})

export const removeSubjectClassDetailAction = (
  id: number
): IRemoveSubjectClassDetail => ({
  type: EClassesAction.REMOVE_SUBJECT_CLASS_DETAIL,
  id
})

export const setUpdateSubjectAction = (
  subject: ISubject
): ISetUpdateSubject => ({
  type: EClassesAction.SET_UPDATE_SUBJECT,
  subject
})

export const updateClassesListAction = (
  classesList: IClass[]
): IUpdateClassListAction => ({
  type: EClassesAction.UPDATE_LIST,
  classesList
})
