import { Action } from 'redux'

export interface CommonState {
  isLoading: boolean
}

export enum CommonTypes {
  SET_LOADING = 'SET_LOADING'
}

export interface SetLoadingAction extends Action {
  type: CommonTypes.SET_LOADING
  isLoading: boolean
}

export type CommonActionTypes = SetLoadingAction
