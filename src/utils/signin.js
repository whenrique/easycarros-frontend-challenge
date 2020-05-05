import Cookie from 'js-cookie'
import request from './request'
import { API_URL, TOKEN_COOKIE } from './constants'

const signin = async (fields, handleSubmitError) => {
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
  } catch (err) {
    return handleSubmitError()
  }
}

export default signin
