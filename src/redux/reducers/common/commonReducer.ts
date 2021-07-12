import {
  CommonActionTypes,
  ICommonState
} from 'redux/actions/common/commonTypes'
import { ECommonActions } from 'redux/actions/common/ECommonAction'
import { purpleColors } from 'utils/colors'

const initialState: ICommonState = {
  isLoading: false,
  notification: null,
  theme: purpleColors
}

const commonReducer = (
  state = initialState,
  action: CommonActionTypes
): ICommonState => {
  switch (action.type) {
    case ECommonActions.SET_THEME:
      return {
        ...state,
        theme: action.theme
      }
    case ECommonActions.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case ECommonActions.SET_NOTIFICATION:
      return {
        ...state,
        notification: action.notification
      }
    default:
      return state
  }
}

export default commonReducer
