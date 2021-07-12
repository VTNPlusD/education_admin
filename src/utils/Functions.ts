import { DEFAULT_AVATAR_URL, MEDIA_URL } from 'constants/general'
import { EUserStatus } from 'interfaces/EUserStatus'
import { colors, IColors } from './colors'

const changeCSS = (theme: IColors) => {
  document.documentElement.style.setProperty('--text', theme.TEXT)
  document.documentElement.style.setProperty(
    '--menu-text-active',
    theme.MENU_TEXT_ACTIVE
  )
  document.documentElement.style.setProperty(
    '--primary-main',
    theme.PRIMARY_MAIN
  )
}

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
      return colors.STATUS_ACTIVE
    case EUserStatus.INACTIVE:
      return colors.STATUS_INACTIVE
    case EUserStatus.BLOCK:
      return colors.STATUS_BLOCK
    default:
      return colors.STATUS_ACTIVE
  }
}

const getImgUrl = (imgName: string) => {
  if (imgName) {
    return MEDIA_URL.concat('/').concat(imgName)
  }
  return DEFAULT_AVATAR_URL
}

const getToken = () => {
  const localData = localStorage.getItem('persist:root')
  if (localData) {
    const parseData = JSON.parse(localData)
    const auth = parseData?.auth
    const cookie = JSON.parse(auth)

    return cookie?.accessToken
  }
}

export {
  ConvertTime,
  checkError,
  convertStatusToColor,
  getImgUrl,
  changeCSS,
  getToken
}
