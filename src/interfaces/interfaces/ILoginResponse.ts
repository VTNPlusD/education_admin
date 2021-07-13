import { IRoles } from './IRoles'
import { IUser } from './IUser'

export interface ILoginResponse {
  access: IAccess
  token: IToken
  user: IUser
  timestamp: Date
}

export interface IAccess {
  additionalPermissions: string[]
  roles: IRoles[]
}

export interface IToken {
  accessToken: string
  accessTokenExpires: string
  refreshToken: string
  tokenType: string
}
