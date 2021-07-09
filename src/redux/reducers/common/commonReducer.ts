import {
  CommonActionTypes,
  ICommonState,
  CommonTypes
} from 'redux/actions/common/commonTypes'

const initialState: ICommonState = {
  isLoading: false,
  notification: null
}

const commonReducer = (
  state = initialState,
  action: CommonActionTypes
): ICommonState => {
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
