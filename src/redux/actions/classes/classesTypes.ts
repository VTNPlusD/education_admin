import { IClass } from 'interfaces/interfaces/IClass'
import { Action } from 'redux'
import { IAddClassRequest } from 'services/requests/IAddClassRequest'
import { IClassListRequest } from 'services/requests/IClassesListRequest'
import { EClassesAction } from './EClassesAction'

export interface IClassesState {
  classesList: IClass[]
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

export interface IUpdateClassListAction extends Action {
  type: EClassesAction.UPDATE_LIST
  classesList: IClass[]
}

export type ClassesActionTypes =
  | IGetClassListAction
  | IUpdateClassListAction
  | IAddClassAction
  | ISetClassAction
  | IDeleteClassAction
