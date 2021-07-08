import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getUserByIdAction } from 'redux/actions/users/usersAction'
import { userSelector } from 'selectors/userSelectors/userSelectors'
import UserDetail from 'views/pages/users/UserDetail'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserById: (id: number) => dispatch(getUserByIdAction(id))
})

export default connect(userSelector, mapDispatchToProps)(UserDetail)
