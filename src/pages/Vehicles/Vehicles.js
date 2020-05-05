import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'
import { useFormik } from 'formik'
import Plates from 'components/Plates'
import Layout from 'components/Layout'
import validationSchema from './yup'
import * as s from './style'
import { TOKEN_COOKIE } from 'utils/constants'

const Vehicles = () => {
  const formik = useFormik({
    initialValues: {
      plate: ''
    },
    validationSchema,
    onSubmit: field => {
      console.log('submit field', field)
    }
  })
  const history = useHistory()

  useEffect(() => {
    if (!Cookie.get(TOKEN_COOKIE)) {
      history.push('/')
    }
  }, [history])

  return (
    <>
      <Layout>
        <s.Wrapper>
          <s.AddVehicle onSubmit={formik.handleSubmit}>
            <s.AddVehicleLabel htmlFor="plate">Add new plate</s.AddVehicleLabel>
            <s.AddVehicleInput placeholder="ABC1234" name="plate" id="plate" value={formik.values.plate} onChange={formik.handleChange} onBlur={formik.handleChange} />
            <s.AddVehicleButton type="submit">
              <s.PlusSign />
            </s.AddVehicleButton>
            <s.ErrorList>
              {(formik.errors.plate && formik.touched.plate) && (
                <s.ErrorItem>&bull; {formik.errors.plate}</s.ErrorItem>
              )}
            </s.ErrorList>
          </s.AddVehicle>
          <Plates />
        </s.Wrapper>
      </Layout>
    </>
  )
}

export default Vehicles
