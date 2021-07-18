import Notification from 'components/notification/Notification'
import { connect } from 'react-redux'
import { commonSelector } from 'selectors/commonSelectors/commonSelector'

export default connect(commonSelector, null)(Notification)
