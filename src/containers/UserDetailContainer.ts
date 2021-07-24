import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { UploadAction } from 'redux/actions/common/commonAction'
import {
  GetUserByIdAction,
  UpdateUserByIdAction
} from 'redux/actions/users/usersAction'
import { userSelector } from 'selectors/userSelectors/userSelectors'
import { IUpdateUserById } from 'interfaces/request/IUpdateUserById'
import UserDetail from 'views/pages/users/UserDetail'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserById: (id: number) => dispatch(GetUserByIdAction(id)),
  updateUserById: (user: IUpdateUserById) =>
    dispatch(UpdateUserByIdAction(user)),
  upload: (file: any, callback: any) => dispatch(UploadAction(file, callback))
})

export default connect(userSelector, mapDispatchToProps)(UserDetail)
