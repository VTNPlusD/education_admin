import { IClass } from 'interfaces/interfaces/IClass'
import { IAddClassRequest } from 'services/requests/IAddClassRequest'
import { IClassListRequest } from 'services/requests/IClassesListRequest'
import {
  IAddClassAction,
  IDeleteClassAction,
  IGetClassListAction,
  ISetClassAction,
  IUpdateClassListAction
} from './classesTypes'
import { EClassesAction } from './EClassesAction'

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

export const setClassAction = (item: IClass): ISetClassAction => ({
  type: EClassesAction.SET_CLASS,
  item
})

export const updateClassesListAction = (
  classesList: IClass[]
): IUpdateClassListAction => ({
  type: EClassesAction.UPDATE_LIST,
  classesList
})
