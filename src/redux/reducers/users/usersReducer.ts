import { EUserStatus } from 'interfaces/EUserStatus'
import { EUserActions } from 'redux/actions/users/EUserAction'
import { UsersActionTypes, UsersState } from 'redux/actions/users/usersTypes'

const initialState: UsersState = {
  usersList: [],
  userDetail: {
    id: 0,
    username: '',
    fullname: '',
    email: '',
    birthday: new Date(),
    phone: '',
    isSuperUser: false,
    status: EUserStatus.ACTIVE
  }
}

const usersReducer = (
  state: UsersState = initialState,
  action: UsersActionTypes
): UsersState => {
  switch (action.type) {
    case EUserActions.UPDATE_USERS_LIST:
      return {
        ...state,
        usersList: action.usersList
      }
    case EUserActions.UPDATE_USER_DETAIL:
      return {
        ...state,
        userDetail: action.user
      }
    default:
      return state
  }
}

export default usersReducer
