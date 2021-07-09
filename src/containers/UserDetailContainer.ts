import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { GetUserByIdAction } from 'redux/actions/users/usersAction'
import { userSelector } from 'selectors/userSelectors/userSelectors'
import UserDetail from 'views/pages/users/UserDetail'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserById: (id: number) => dispatch(GetUserByIdAction(id))
})

export default connect(userSelector, mapDispatchToProps)(UserDetail)
