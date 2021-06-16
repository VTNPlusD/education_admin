import { AppState } from 'redux/reducers'

export const authSelector = (state: AppState) => ({
  authed: state.auth.authed,
  email: state.auth.email,
  accessToken: state.auth.accessToken
})
