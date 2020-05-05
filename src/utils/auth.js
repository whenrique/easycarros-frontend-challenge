import Cookie from 'js-cookie'
import request from './request'
import { API_URL, TOKEN_COOKIE } from './constants'

export const signin = async (fields = {}, handleSubmitSuccess = Function, handleSubmitError = Function) => {
  try {
    const config = {
      method: 'post',
      url: `${API_URL}/auth`,
      data: {
        ...fields
      }
    }
    const { data } = await request(config)
    Cookie.set(TOKEN_COOKIE, data.data.token)
    return handleSubmitSuccess()
  } catch (err) {
    return handleSubmitError()
  }
}

export const isAuth = (cookie = '') => !!cookie
