export const API_URL = 'http://localhost:8181'

export const TOKEN_COOKIE = 'token'

export const PLATE_REGEX = /^[a-z]{3}[0-9]{4}$/gi

export const FORM_MESSAGES = {
  EMAIL: {
    VALID: 'Type a valid email.',
    REQUIRED: 'Username field is required.'
  },
  PASSWORD: {
    REQUIRED: 'Password field is required.'
  },
  INVALID: 'Invalid credentials.',
  PLATE: {
    VALID: 'Type a valid plate. Eg.: ABC1234',
    REQUIRED: 'Plate field is required.'
  }
}

export const STATUS = {
  rejected: 'rejected',
  pending: 'pending',
  resolved: 'resolved'
}
