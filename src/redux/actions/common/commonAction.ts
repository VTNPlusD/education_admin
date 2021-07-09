import { INotification } from 'interfaces/INotification'
import {
  ECommonTypes,
  ISetLoadingAction,
  ISetNotificationAction
} from './commonTypes'

export const SetLoadingAction = (isLoading: boolean): ISetLoadingAction => ({
  type: ECommonTypes.SET_LOADING,
  isLoading
})

export const SetNotificationAction = (
  notification: INotification | null
): ISetNotificationAction => ({
  type: ECommonTypes.SET_NOTIFICATION,
  notification
})
