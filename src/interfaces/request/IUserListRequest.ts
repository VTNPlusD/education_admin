export interface IUserListRequest {
  page?: number
  limit?: number
  order?: 'ASC' | 'DESC'
  search?: string
}
