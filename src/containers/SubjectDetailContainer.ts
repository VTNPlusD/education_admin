import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getClassDetailAction } from 'redux/actions/classes/classActions'
import { getSubjectDetailAction } from 'redux/actions/subjects/subjectActions'
import { subjectSelectors } from 'selectors/subjectSelectors/subjectSelectors'
import SubjectDetail from 'views/pages/subjects/SubjectDetail'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSubject: (id: number) => dispatch(getSubjectDetailAction(id)),
  getClassDetail: (id: number) => dispatch(getClassDetailAction(id))
})

export default connect(subjectSelectors, mapDispatchToProps)(SubjectDetail)
