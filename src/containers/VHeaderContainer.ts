import { VHeader } from 'components'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { LogoutAction } from 'redux/actions/auth/authAction'
import { SetThemeAction } from 'redux/actions/common/commonAction'
import { authSelector } from 'selectors/authSelectors/authSelector'
import { IColors } from 'utils/colors'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogout: () => dispatch(LogoutAction()),
  handleChangeTheme: (theme: IColors) => dispatch(SetThemeAction(theme))
})

export default connect(authSelector, mapDispatchToProps)(VHeader)
