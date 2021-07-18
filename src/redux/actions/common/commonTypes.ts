import { INotification } from 'interfaces/interfaces/INotification'
import { IUpload } from 'interfaces/interfaces/IUpload'
import { Action } from 'redux'
import { IColors } from 'utils/colors'
import { ECommonActions } from './ECommonAction'

export interface ICommonState {
  isLoading: boolean
  notification: INotification | null
  theme: IColors
  listUpload: IUpload[]
}

export interface ISetLoadingAction extends Action {
  type: ECommonActions.SET_LOADING
  isLoading: boolean
}

export interface ISetNotificationAction extends Action {
  type: ECommonActions.SET_NOTIFICATION
  notification: INotification | null
}

export interface ISetThemeAction extends Action {
  type: ECommonActions.SET_THEME
  theme: any
}

export interface IUploadAction extends Action {
  type: ECommonActions.UPLOAD
  file: File
  callback: (val: IUpload) => void
}

export interface ISetListUploadAction extends Action {
  type: ECommonActions.SET_LIST_UPLOAD
  listUpload: IUpload[]
}

export interface ISetItemUploadAction extends Action {
  type: ECommonActions.SET_ITEM_UPLOAD
  itemUpload: IUpload
}

export interface IDeleteImageAction extends Action {
  type: ECommonActions.DELETE_IMAGE
  name: string
}

export type CommonActionTypes =
  | ISetLoadingAction
  | ISetNotificationAction
  | ISetThemeAction
  | IUploadAction
  | ISetListUploadAction
  | ISetItemUploadAction
  | IDeleteImageAction
