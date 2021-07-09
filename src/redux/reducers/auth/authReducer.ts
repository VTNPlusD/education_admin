import {
  IAuthState,
  AuthActionTypes,
  AuthTypes
} from 'redux/actions/auth/authTypes'

const initialState: IAuthState = {
  authed: false,
  email: '',
  accessToken: ''
}

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): IAuthState => {
  switch (action.type) {
    case AuthTypes.UPDATE_AUTH:
      return {
        ...state,
        authed: action.authed,
        email: action.email,
        accessToken: action.accessToken
      }
    case AuthTypes.LOGOUT:
      return { ...initialState }
    default:
      return state
  }
}

export default authReducer
