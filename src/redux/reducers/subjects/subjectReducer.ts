import { ESubjectActions } from 'redux/actions/subjects/ESubjectActions'
import {
  ISubjectState,
  SubjectActionTypes
} from 'redux/actions/subjects/subjectTypes'

const initialState: ISubjectState = {
  subjectDetail: {
    id: 0,
    name: '',
    order: 0,
    active: true,
    __chapters__: []
  }
}

const subjectReducer = (
  state: ISubjectState = initialState,
  action: SubjectActionTypes
): ISubjectState => {
  switch (action.type) {
    case ESubjectActions.SET_SUBJECT_DETAIL:
      return {
        ...state,
        subjectDetail: action.subject
      }
    default:
      return state
  }
}

export default subjectReducer
