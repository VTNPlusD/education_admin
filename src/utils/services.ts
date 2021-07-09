import { AxiosResponse } from 'axios'
import { IPayload } from 'interfaces/IPayload'
import { checkError } from './Functions'

function checkStatus<T>(response: AxiosResponse<IPayload<T>>) {
  if (response.status >= 200 && response.status < 300) {
    return response.data.payload
  }

  throw Object.assign(checkError(response.status, response.statusText))
}

export { checkStatus }
