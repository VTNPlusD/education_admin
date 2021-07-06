import {
  UsersActionTypes,
  UsersState,
  UsersTypes
} from 'redux/actions/users/usersTypes'

const initialState: UsersState = {
  usersList: []
}

const usersReducer = (
  state: UsersState = initialState,
  action: UsersActionTypes
): UsersState => {
  switch (action.type) {
    case UsersTypes.UPDATE_USERS_LIST:
      return {
        ...state,
        usersList: action.usersList
      }
    default:
      return state
  }
}

export default usersReducer
