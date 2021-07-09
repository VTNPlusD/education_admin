import { INotification } from 'interfaces/INotification'
import {
  CommonTypes,
  ISetLoadingAction,
  ISetNotificationAction
} from './commonTypes'

export const SetLoadingAction = (isLoading: boolean): ISetLoadingAction => ({
  type: CommonTypes.SET_LOADING,
  isLoading
})

export const SetNotificationAction = (
  notification: INotification | null
): ISetNotificationAction => ({
  type: CommonTypes.SET_NOTIFICATION,
  notification
})
