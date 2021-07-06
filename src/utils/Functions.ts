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

export { ConvertTime, checkError, convertStatusToColor }
