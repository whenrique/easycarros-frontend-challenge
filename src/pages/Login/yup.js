import * as yup from 'yup'
import { FORM_MESSAGE } from 'utils/constants'

const validationSchema = yup.object({
  email: yup
    .string()
    .email(FORM_MESSAGE.EMAIL.VALID)
    .required(FORM_MESSAGE.EMAIL.REQUIRED),
  password: yup
    .string()
    .required(FORM_MESSAGE.PASSWORD.REQUIRED)
})

export default validationSchema
