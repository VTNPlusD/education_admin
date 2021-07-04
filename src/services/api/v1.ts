import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { API_URL } from 'constants/general'
import { mapKeys, snakeCase } from 'lodash'
import { ERROR_TYPE } from 'interfaces/ErrorTypes'
import { checkError } from 'utils/Functions'
import i18n from 'configs/i18n'

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 30000
}

const instance = axios.create({
  ...DEFAULT_API_CONFIG
})

instance.interceptors.request.use((config: any) => {
  config.data = mapKeys(config.data, (_, key) => snakeCase(key))
  return config
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response) {
      throw error.response
    }
    if (error.message && error.message === 'Network Error') {
      throw Object.assign(
        checkError(
          ERROR_TYPE.ERR_INTERNET_DISCONNECTED,
          i18n.t('errors.internet')
        )
      )
    }
    if (error.request) {
      throw Object.assign(
        checkError(ERROR_TYPE.BAD_REQUEST, i18n.t('errors.badRequest'))
      )
    }
    throw error?.message || i18n.t('errors.wrong')
  }
)

// const logoutIfUnauthenticated = (error: AxiosError) => {
//   if (error.response?.data.error_code === ERROR_CODES.unauthenticated) {
//     // handle logout
//   }
// }

export default instance
