import { AxiosResponse } from 'axios'
import i18n from 'configs/i18n'
import { ESuccessType } from 'interfaces/enums/ESuccessType'
import { INotification } from 'interfaces/interfaces/INotification'
import { IPayload } from 'interfaces/interfaces/IPayload'
import { checkError } from './Functions'

const checkStatus = <T>(response: AxiosResponse<IPayload<T>>) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data.payload
  }

  if (response.status >= 400 && response.status < 500) {
    throw Object.assign(response.data, response.statusText)
  }

  throw Object.assign(checkError(response.status, response.statusText))
}

const errorNoti = <T>(
  response: AxiosResponse<IPayload<T>>,
  title: string = i18n.t('notification.error')
): INotification => {
  const notiType = response.data.errorType
  const message = response.data.message[0]
  return {
    notiType,
    title,
    message
  }
}

const successNoti = (
  message: string,
  title: string = i18n.t('notification.error')
) => {
  return {
    notiType: ESuccessType.SUCCESS,
    title,
    message
  }
}

export { checkStatus, errorNoti, successNoti }
