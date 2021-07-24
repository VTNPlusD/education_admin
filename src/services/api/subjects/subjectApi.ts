import { ISubject } from 'interfaces/interfaces/ISubject'
import { IAddSubjectRequest } from 'services/requests/IAddSubjectRequest'
import { SUBJECTS } from '..'
import instance from '../v1'

class SubjectApis {
  addSubject = (request: IAddSubjectRequest) => instance.post(SUBJECTS, request)
  deleteSubject = (id: number) =>
    instance.delete(SUBJECTS, {
      data: { id }
    })
  updateSubject = (subject: ISubject) => instance.put(SUBJECTS, subject)
  getSubject = (id: number) =>
    instance.get(SUBJECTS.concat('/').concat(id.toString()))
}

export const SubjectApi = new SubjectApis()
