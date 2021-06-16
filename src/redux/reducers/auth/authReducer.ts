import {
  AuthState,
  AuthActionTypes,
  AuthTypes
} from 'redux/actions/auth/authTypes'

const initialState: AuthState = {
  authed: false,
  email: '',
  accessToken: ''
}

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case AuthTypes.UPDATE_AUTH:
      return {
        ...state,
        authed: action.authed,
        email: action.email,
        accessToken: action.accessToken
      }
    default:
      return state
  }
}

export default authReducer
