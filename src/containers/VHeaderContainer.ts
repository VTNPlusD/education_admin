import { VHeader } from 'components'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { LogoutAction } from 'redux/actions/auth/authAction'
import { authSelector } from 'selectors/authSelectors/authSelector'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogout: () => dispatch(LogoutAction())
})

export default connect(authSelector, mapDispatchToProps)(VHeader)
