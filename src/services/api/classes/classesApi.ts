import { IClass } from 'interfaces/interfaces/IClass'
import { IAddClassRequest } from 'services/requests/IAddClassRequest'
import { IClassListRequest } from 'services/requests/IClassesListRequest'
import { CLASSES } from '..'
import instance from '../v1'

class ClassesApis {
  getClassesList = (request?: IClassListRequest) =>
    instance.get(CLASSES, {
      params: request
    })
  addClass = (request: IAddClassRequest) => instance.post(CLASSES, request)
  deleteClass = (id: number) =>
    instance.delete(CLASSES, {
      data: { id: id }
    })
  updateClass = (request: IClass) => instance.put(CLASSES, request)
  getClassDetail = (id: number) =>
    instance.get(CLASSES.concat('/').concat(id.toString()))
}

export const ClassesApi = new ClassesApis()
