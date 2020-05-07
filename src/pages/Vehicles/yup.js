import * as yup from 'yup'
import { FORM_MESSAGE, PLATE_REGEX } from 'utils/constants'

const validationSchema = yup.object({
  plate: yup
    .string()
    .matches(PLATE_REGEX, FORM_MESSAGE.PLATE.VALID)
    .required(FORM_MESSAGE.PLATE.REQUIRED)
})

export default validationSchema
