import { IClass } from 'interfaces/interfaces/IClass'
import { ISubject } from 'interfaces/interfaces/ISubject'
import { Action } from 'redux'
import { IAddClassRequest } from 'interfaces/request/IAddClassRequest'
import { IClassListRequest } from 'interfaces/request/IClassesListRequest'
import { EClassesAction } from './EClassActions'

export interface IClassesState {
  classesList: IClass[]
  classDetail: IClass
}

export interface IGetClassListAction extends Action {
  type: EClassesAction.LIST_CLASSES
  request?: IClassListRequest
}

export interface IAddClassAction extends Action {
  type: EClassesAction.ADD_CLASS
  request: IAddClassRequest
}

export interface ISetClassAction extends Action {
  type: EClassesAction.SET_CLASS
  item: IClass
}

export interface IDeleteClassAction extends Action {
  type: EClassesAction.DELETE_CLASS
  id: number
}

export interface IUpdateClassAction extends Action {
  type: EClassesAction.UPDATE_CLASS
  request: IClass
}

export interface ISetUpdateClassAction extends Action {
  type: EClassesAction.SET_UPDATE_CLASS
  request: IClass
}

export interface IGetClassDetailAction extends Action {
  type: EClassesAction.GET_CLASS_DETAIL
  id: number
}

export interface ISetClassDetailAction extends Action {
  type: EClassesAction.SET_CLASS_DETAIL
  classDetail: IClass
}

export interface IUpdateClassListAction extends Action {
  type: EClassesAction.UPDATE_LIST
  classesList: IClass[]
}

export interface ISetSubjectClassDetail extends Action {
  type: EClassesAction.SET_SUBJECT_CLASS_DETAIL
  subject: ISubject
}

export interface IRemoveSubjectClassDetail extends Action {
  type: EClassesAction.REMOVE_SUBJECT_CLASS_DETAIL
  id: number
}

export interface ISetUpdateSubject extends Action {
  type: EClassesAction.SET_UPDATE_SUBJECT
  subject: ISubject
}

export type ClassesActionTypes =
  | IGetClassListAction
  | IUpdateClassListAction
  | IAddClassAction
  | ISetClassAction
  | IDeleteClassAction
  | IUpdateClassAction
  | ISetUpdateClassAction
  | IGetClassDetailAction
  | ISetClassDetailAction
  | ISetSubjectClassDetail
  | IRemoveSubjectClassDetail
  | ISetUpdateSubject
