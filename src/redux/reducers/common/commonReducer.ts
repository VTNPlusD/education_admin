import {
  CommonActionTypes,
  ICommonState,
  ECommonTypes
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
    case ECommonTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case ECommonTypes.SET_NOTIFICATION:
      return {
        ...state,
        notification: action.notification
      }
    default:
      return state
  }
}

export default commonReducer
