import { INotification } from 'interfaces/INotification'
import { Action } from 'redux'
import { IColors } from 'utils/colors'
import { ECommonActions } from './ECommonAction'

export interface ICommonState {
  isLoading: boolean
  notification: INotification | null
  theme: IColors
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
  file: any
}

export type CommonActionTypes =
  | ISetLoadingAction
  | ISetNotificationAction
  | ISetThemeAction
  | IUploadAction
