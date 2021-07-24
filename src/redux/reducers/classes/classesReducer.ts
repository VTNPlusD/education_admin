import {
  ClassesActionTypes,
  IClassesState
} from 'redux/actions/classes/classTypes'
import { EClassesAction } from 'redux/actions/classes/EClassActions'

const initialState: IClassesState = {
  classesList: [],
  classDetail: {
    id: 0,
    name: '',
    type: '',
    iconName: '',
    order: 0,
    active: true,
    __subjects__: []
  }
}

const classesReducer = (
  state: IClassesState = initialState,
  action: ClassesActionTypes
): IClassesState => {
  switch (action.type) {
    case EClassesAction.UPDATE_LIST:
      return {
        ...state,
        classesList: action.classesList
      }
    case EClassesAction.SET_CLASS:
      const newClass = [...state.classesList]
      newClass.push(action.item)
      return {
        ...state,
        classesList: newClass
      }
    case EClassesAction.DELETE_CLASS:
      const newClassDelete = [...state.classesList].filter(
        (item) => item.id !== action.id
      )
      return {
        ...state,
        classesList: newClassDelete
      }
    case EClassesAction.SET_UPDATE_CLASS:
      const newClassUpdate = [...state.classesList]
      const classIndex = newClassUpdate.findIndex(
        (item) => item.id === action.request.id
      )
      newClassUpdate[classIndex] = action.request
      return {
        ...state,
        classesList: newClassUpdate
      }
    case EClassesAction.SET_CLASS_DETAIL:
      return {
        ...state,
        classDetail: action.classDetail
      }
    case EClassesAction.SET_SUBJECT_CLASS_DETAIL:
      const newClassDetail = { ...state.classDetail }
      newClassDetail.__subjects__?.push(action.subject)
      return {
        ...state,
        classDetail: newClassDetail
      }
    case EClassesAction.REMOVE_SUBJECT_CLASS_DETAIL:
      const newClassDetail1 = { ...state.classDetail }
      const arrSubject = newClassDetail1.__subjects__?.filter(
        (subject) => subject.id !== action.id
      )
      newClassDetail1.__subjects__ = arrSubject
      return {
        ...state,
        classDetail: newClassDetail1
      }
    case EClassesAction.SET_UPDATE_SUBJECT:
      const newClassDetail2 = { ...state.classDetail }
      const classIndex1 =
        newClassDetail2.__subjects__?.findIndex(
          (item) => item.id === action.subject.id
        ) || 0
      if (newClassDetail2.__subjects__) {
        newClassDetail2.__subjects__[classIndex1] = action.subject
      }
      return {
        ...state,
        classDetail: newClassDetail2
      }
    default:
      return state
  }
}

export default classesReducer
