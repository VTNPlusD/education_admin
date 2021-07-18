import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  addClassAction,
  deleteClassAction,
  getClassesListAction
} from 'redux/actions/classes/classesAction'
import { classSelectors } from 'selectors/classSelectors/classSelectors'
import { IAddClassRequest } from 'services/requests/IAddClassRequest'
import { IClassListRequest } from 'services/requests/IClassesListRequest'
import ClassesManagement from 'views/pages/classes/ClassesManagement'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getClassesListAction: (request?: IClassListRequest) =>
    dispatch(getClassesListAction(request)),
  addClass: (request: IAddClassRequest) => dispatch(addClassAction(request)),
  deleteClass: (id: number) => dispatch(deleteClassAction(id))
})

export default connect(classSelectors, mapDispatchToProps)(ClassesManagement)
