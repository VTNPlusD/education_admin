import {
  CommonActionTypes,
  CommonState,
  CommonTypes
} from 'redux/actions/common/commonTypes'

const initialState: CommonState = {
  isLoading: false,
  notification: null
}

const commonReducer = (
  state = initialState,
  action: CommonActionTypes
): CommonState => {
  switch (action.type) {
    case CommonTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case CommonTypes.SET_NOTIFICATION:
      return {
        ...state,
        notification: action.notification
      }
    default:
      return state
  }
}

export default commonReducer
