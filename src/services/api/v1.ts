import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { API_URL } from 'constants/general'
import { mapKeys, snakeCase } from 'lodash'
import { ERROR_CODES, ERROR_MESSAGES } from 'services/errors/ErrorTypes'
import { checkError } from 'utils/functions'

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
    console.log(error.toJSON())
    if (error.request) {
      // handle request error: network, etc,...
      throw Object.assign(
        checkError(ERROR_CODES.badRequest, ERROR_MESSAGES.badRequest)
      )
    }
    if (error.message) {
      throw Object.assign(
        checkError(ERROR_CODES.badRequest, ERROR_MESSAGES.badRequest)
      )
    }
    if (error.response) {
      throw error.response
    }
    throw error.response
  }
)

// const logoutIfUnauthenticated = (error: AxiosError) => {
//   if (error.response?.data.error_code === ERROR_CODES.unauthenticated) {
//     // handle logout
//   }
// }

export default instance
