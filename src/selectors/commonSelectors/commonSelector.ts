import { AppState } from 'redux/reducers'

export const commonSelector = (state: AppState) => ({
  isLoading: state.common.isLoading,
  notification: state.common.notification,
  theme: state.common.theme,
  listUpload: state.common.listUpload
})
