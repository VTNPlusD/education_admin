import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getUsersListAction } from 'redux/actions/users/usersAction'
import { userSelector } from 'selectors/userSelectors/userSelectors'
import { IUserListRequest } from 'interfaces/request/IUserListRequest'
import UsersManagement from 'views/pages/users/UsersManagement'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUsersList: (request: IUserListRequest) =>
    dispatch(getUsersListAction(request))
})

export default connect(userSelector, mapDispatchToProps)(UsersManagement)
