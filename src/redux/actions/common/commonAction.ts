import { CommonTypes, SetLoadingAction } from './commonTypes'

export const setLoadingAction = (isLoading: boolean): SetLoadingAction => ({
  type: CommonTypes.SET_LOADING,
  isLoading
})
