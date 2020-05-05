import * as yup from 'yup'
import { FORM_MESSAGES } from 'utils/constants'

const validationSchema = yup.object({
  email: yup
    .string()
    .email(FORM_MESSAGES.EMAIL.VALID)
    .required(FORM_MESSAGES.EMAIL.REQUIRED),
  password: yup
    .string()
    .required(FORM_MESSAGES.PASSWORD.REQUIRED)
})

export default validationSchema
