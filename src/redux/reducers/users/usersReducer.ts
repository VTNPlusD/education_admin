import { AuthActionTypes } from 'redux/actions/auth/authTypes'
import { UsersState } from 'redux/actions/users/usersTypes'

const initialState: UsersState = {
  usersList: []
}

const usersReducer = (
  state = initialState,
  action: AuthActionTypes
): UsersState => {
  switch (action.type) {
    default:
      return state
  }
}

export default usersReducer
