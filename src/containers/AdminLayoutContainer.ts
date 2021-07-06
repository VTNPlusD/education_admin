import { connect } from 'react-redux'
import { commonSelector } from 'selectors/commonSelectors/commonSelector'
import AdminLayout from 'views/layouts/AdminLayout'

export default connect(commonSelector, null)(AdminLayout)
