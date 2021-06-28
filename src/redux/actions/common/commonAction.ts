import { INotification } from 'interfaces/INotification'
import {
  CommonTypes,
  SetLoadingAction,
  SetNotificationAction
} from './commonTypes'

export const setLoadingAction = (isLoading: boolean): SetLoadingAction => ({
  type: CommonTypes.SET_LOADING,
  isLoading
})

export const setNotificationAction = (
  notification: INotification | null
): SetNotificationAction => ({
  type: CommonTypes.SET_NOTIFICATION,
  notification
})
