import { ISubject } from 'interfaces/interfaces/ISubject'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getClassDetailAction } from 'redux/actions/classes/classActions'
import {
  addSubjectAction,
  deleteSubjectAction,
  updateSubjectAction
} from 'redux/actions/subjects/subjectActions'
import { classSelectors } from 'selectors/classSelectors/classSelectors'
import { IAddSubjectRequest } from 'interfaces/request/IAddSubjectRequest'
import ClassDetail from 'views/pages/classes/ClassDetail'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getClassDetail: (id: number) => dispatch(getClassDetailAction(id)),
  addSubject: (request: IAddSubjectRequest) =>
    dispatch(addSubjectAction(request)),
  deleteSubject: (id: number) => dispatch(deleteSubjectAction(id)),
  updateSubject: (subject: ISubject) => dispatch(updateSubjectAction(subject))
})

export default connect(classSelectors, mapDispatchToProps)(ClassDetail)
