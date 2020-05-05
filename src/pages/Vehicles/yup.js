import * as yup from 'yup'
import { FORM_MESSAGES, PLATE_REGEX } from 'utils/constants'

const validationSchema = yup.object({
  plate: yup
    .string()
    .matches(PLATE_REGEX, FORM_MESSAGES.PLATE.VALID)
    .required(FORM_MESSAGES.PLATE.REQUIRED)
})

export default validationSchema
