import { EUserStatus } from 'interfaces/enums/EUserStatus'
import { EUserActions } from 'redux/actions/users/EUserAction'
import { UsersActionTypes, IUsersState } from 'redux/actions/users/usersTypes'

const initialState: IUsersState = {
  usersList: {
    content: [],
    currentPage: 1,
    totalPages: 1,
    payloadSize: 20,
    hasNext: false,
    skippedRecords: 0,
    totalRecords: 0
  },
  userDetail: {
    id: 0,
    username: '',
    fullname: '',
    email: '',
    birthday: new Date(),
    phone: '',
    imageName: '',
    isSuperUser: false,
    roles: [],
    status: EUserStatus.ACTIVE
  }
}

const usersReducer = (
  state: IUsersState = initialState,
  action: UsersActionTypes
): IUsersState => {
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
