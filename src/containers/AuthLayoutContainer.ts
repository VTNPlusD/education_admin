import { connect } from 'react-redux'
import { commonSelector } from 'selectors/commonSelectors/commonSelector'
import AuthLayout from 'views/layouts/AuthLayout'

export default connect(commonSelector, null)(AuthLayout)
