import { AppState } from 'redux/reducers'

export const userSelector = (state: AppState) => ({
  usersList: state.users.usersList,
  userDetail: state.users.userDetail,
  theme: state.common.theme,
  isLoading: state.common.isLoading
})
