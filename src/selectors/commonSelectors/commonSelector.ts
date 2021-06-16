import { AppState } from 'redux/reducers'

export const commonSelector = (state: AppState) => ({
  isLoading: state.common.isLoading
})
