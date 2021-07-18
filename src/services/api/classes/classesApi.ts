import { IAddClassRequest } from 'services/requests/IAddClassRequest'
import { IClassListRequest } from 'services/requests/IClassesListRequest'
import { ADD_CLASS, DELETE_CLASS, GET_CLASSES_LIST } from '..'
import instance from '../v1'

class ClassesApis {
  getClassesList = (request?: IClassListRequest) =>
    instance.get(GET_CLASSES_LIST, {
      params: request
    })
  addClass = (request: IAddClassRequest) => instance.post(ADD_CLASS, request)
  deleteClass = (id: number) =>
    instance.delete(DELETE_CLASS, {
      data: { id: id }
    })
}

export const ClassesApi = new ClassesApis()
