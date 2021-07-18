import {
  CommonActionTypes,
  ICommonState
} from 'redux/actions/common/commonTypes'
import { ECommonActions } from 'redux/actions/common/ECommonAction'
import { purpleColors } from 'utils/colors'

const initialState: ICommonState = {
  isLoading: false,
  notification: null,
  theme: purpleColors,
  listUpload: []
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
    case ECommonActions.SET_LIST_UPLOAD:
      return {
        ...state,
        listUpload: action.listUpload
      }
    case ECommonActions.SET_ITEM_UPLOAD:
      const newList = [...state.listUpload]
      newList.unshift(action.itemUpload)
      return {
        ...state,
        listUpload: newList
      }
    case ECommonActions.DELETE_IMAGE:
      const newListImage = state.listUpload.filter(
        (item) => item.name !== action.name
      )
      return {
        ...state,
        listUpload: newListImage
      }
    default:
      return state
  }
}

export default commonReducer
