import Cookie from 'js-cookie'
import request from './request'
import { TOKEN_COOKIE, API_URL } from './constants'

const token = Cookie.get(TOKEN_COOKIE)

export const setPlate = async (data = {}) => {
  const sanitizedData = {
    plate: data.plate.toUpperCase()
  }
  try {
    const { data } = await request({
      method: 'post',
      url: `${API_URL}/vehicle`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: sanitizedData
    })
    return data
  } catch (err) {
    return err
  }
}

export const getPlates = async () => {
  try {
    const { data } = await request({
      url: `${API_URL}/vehicle`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (err) {
    return err
  }
}

export const deletePlate = async (id) => {
  try {
    const { status } = await request({
      method: 'delete',
      url: `${API_URL}/vehicle/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return status
  } catch (err) {
    return err
  }
}
