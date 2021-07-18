import { INotification } from 'interfaces/interfaces/INotification'
import { IUpload } from 'interfaces/interfaces/IUpload'
import { IColors } from 'utils/colors'
import {
  IDeleteImageAction,
  ISetItemUploadAction,
  ISetListUploadAction,
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

export const UploadAction = (
  file: File,
  callback: (val: IUpload) => void
): IUploadAction => ({
  type: ECommonActions.UPLOAD,
  file,
  callback
})

export const GetListUploadAction = () => ({
  type: ECommonActions.GET_LIST_UPLOAD
})

export const SetListUploadAction = (
  listUpload: IUpload[]
): ISetListUploadAction => ({
  type: ECommonActions.SET_LIST_UPLOAD,
  listUpload
})

export const SetItemUploadAction = (
  itemUpload: IUpload
): ISetItemUploadAction => ({
  type: ECommonActions.SET_ITEM_UPLOAD,
  itemUpload
})

export const DeleteImageAction = (name: string): IDeleteImageAction => ({
  type: ECommonActions.DELETE_IMAGE,
  name
})

export const SetThemeAction = (theme: IColors): ISetThemeAction => ({
  type: ECommonActions.SET_THEME,
  theme
})
