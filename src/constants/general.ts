import { ERoles } from 'interfaces/enums/ERoles'

const BASE_URL = 'http://localhost:3000'
const API_URL = BASE_URL.concat('/api/v1')
const MEDIA_URL = API_URL.concat('/upload/files')
const DEFAULT_AVATAR_URL =
  'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg'

const RoleList = [
  { value: ERoles.DEVELOPER },
  { value: ERoles.ADMIN },
  { value: ERoles.USER },
  { value: ERoles.TECHER }
]

export { BASE_URL, API_URL, MEDIA_URL, DEFAULT_AVATAR_URL, RoleList }
