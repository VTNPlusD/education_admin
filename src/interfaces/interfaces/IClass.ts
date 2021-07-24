import { ISubject } from './ISubject'

export interface IClass {
  createdAt?: Date
  updatedAt?: Date
  id: number
  name: string
  type: string
  iconName: string
  order: number
  active: boolean
  __subjects__?: ISubject[]
}
