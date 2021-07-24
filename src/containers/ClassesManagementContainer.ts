import { IClass } from 'interfaces/interfaces/IClass'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  addClassAction,
  deleteClassAction,
  getClassesListAction,
  updateClassAction
} from 'redux/actions/classes/classActions'
import { classSelectors } from 'selectors/classSelectors/classSelectors'
import { IAddClassRequest } from 'interfaces/request/IAddClassRequest'
import { IClassListRequest } from 'interfaces/request/IClassesListRequest'
import ClassesManagement from 'views/pages/classes/ClassesManagement'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getClassesListAction: (request?: IClassListRequest) =>
    dispatch(getClassesListAction(request)),
  addClass: (request: IAddClassRequest) => dispatch(addClassAction(request)),
  updateClass: (request: IClass) => dispatch(updateClassAction(request)),
  deleteClass: (id: number) => dispatch(deleteClassAction(id))
})

export default connect(classSelectors, mapDispatchToProps)(ClassesManagement)
