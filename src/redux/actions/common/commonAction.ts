import { INotification } from 'interfaces/interfaces/INotification'
import { IColors } from 'utils/colors'
import {
  ISetLoadingAction,
  ISetNotificationAction,
  ISetThemeAction,
  IUploadAction
} from './commonTypes'
import { ECommonActions } from './ECommonAction'

export const SetLoadingAction = (isLoading: boolean): ISetLoadingAction => ({
  type: ECommonActions.SET_LOADING,
  isLoading
})

export const SetNotificationAction = (
  notification: INotification | null
): ISetNotificationAction => ({
  type: ECommonActions.SET_NOTIFICATION,
  notification
})

export const UploadAction = (file: any, callback: any): IUploadAction => ({
  type: ECommonActions.UPLOAD,
  file,
  callback
})

export const SetThemeAction = (theme: IColors): ISetThemeAction => ({
  type: ECommonActions.SET_THEME,
  theme
})
