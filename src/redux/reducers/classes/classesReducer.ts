import {
  ClassesActionTypes,
  IClassesState
} from 'redux/actions/classes/classesTypes'
import { EClassesAction } from 'redux/actions/classes/EClassesAction'

const initialState: IClassesState = {
  classesList: []
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
    default:
      return state
  }
}

export default classesReducer
