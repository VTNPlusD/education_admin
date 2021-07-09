import { DEFAULT_AVATAR_URL, MEDIA_URL } from 'constants/general'
import { EUserStatus } from 'interfaces/EUserStatus'

const ConvertTime = (time: Date) => {
  return time
}

const checkError = (errorType: string | number, message: string) => {
  return {
    errorType: errorType,
    message: message
  }
}

const convertStatusToColor = (status: string) => {
  switch (status) {
    case EUserStatus.ACTIVE:
      return 'green'
    case EUserStatus.INACTIVE:
      return 'orange'
    case EUserStatus.BLOCK:
      return 'red'
    default:
      return 'green'
  }
}

const getImgUrl = (imgName: string) => {
  if (imgName) {
    return MEDIA_URL.concat('/').concat(imgName)
  }
  return DEFAULT_AVATAR_URL
}

export { ConvertTime, checkError, convertStatusToColor, getImgUrl }
