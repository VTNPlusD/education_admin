import {
  CommonActionTypes,
  CommonState,
  CommonTypes
} from 'redux/actions/common/commonTypes'

const initialState: CommonState = {
  isLoading: false
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
    default:
      return state
  }
}

export default commonReducer
