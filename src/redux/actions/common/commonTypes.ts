import { INotification } from 'interfaces/INotification'
import { Action } from 'redux'

export interface ICommonState {
  isLoading: boolean
  notification: INotification | null
}

export enum CommonTypes {
  SET_LOADING = 'SET_LOADING',
  SET_NOTIFICATION = 'SET_NOTIFICATION'
}

export interface ISetLoadingAction extends Action {
  type: CommonTypes.SET_LOADING
  isLoading: boolean
}

export interface ISetNotificationAction extends Action {
  type: CommonTypes.SET_NOTIFICATION
  notification: INotification | null
}

export type CommonActionTypes = ISetLoadingAction | ISetNotificationAction
