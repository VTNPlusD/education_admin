import VButton from 'components/button/VButton'
import { connect } from 'react-redux'
import { commonSelector } from 'selectors/commonSelectors/commonSelector'

export default connect(commonSelector, null)(VButton)
