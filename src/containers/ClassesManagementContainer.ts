import { connect } from 'react-redux'
import { userSelector } from 'selectors/userSelectors/userSelectors'
import ClassesManagement from 'views/pages/ClassesManagement'

export default connect(userSelector, null)(ClassesManagement)
