import { IUser } from './IUser'

export interface IUserList {
  content: IUser[]
  currentPage: number
  totalPages: number
  payloadSize: number
  hasNext: boolean
  skippedRecords: number
  totalRecords: number
}
