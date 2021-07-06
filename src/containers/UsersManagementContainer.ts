import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getUsersListAction } from 'redux/actions/users/usersAction'
import { userSelector } from 'selectors/userSelectors/userSelectors'
import UsersManagement from 'views/pages/UsersManagement'

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsersList: () => dispatch(getUsersListAction())
})

export default connect(userSelector, mapDispatchToProps)(UsersManagement)
