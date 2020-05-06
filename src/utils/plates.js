import Cookie from 'js-cookie'
import request from './request'
import { TOKEN_COOKIE, API_URL } from './constants'

const token = Cookie.get(TOKEN_COOKIE)

export const setPlate = (data = {}) => {
  const sanitizedData = {
    plate: data.plate.toUpperCase()
  }
  try {
    request({
      method: 'post',
      url: `${API_URL}/vehicle`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: sanitizedData
    })
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
    await request({
      method: 'delete',
      url: `${API_URL}/vehicle/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (err) {
    return err
  }
}
