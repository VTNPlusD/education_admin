import {
  IAuthState,
  AuthActionTypes,
  EAuthTypes
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
    case EAuthTypes.UPDATE_AUTH:
      return {
        ...state,
        authed: action.authed,
        email: action.email,
        accessToken: action.accessToken
      }
    case EAuthTypes.LOGOUT:
      return { ...initialState }
    default:
      return state
  }
}

export default authReducer
