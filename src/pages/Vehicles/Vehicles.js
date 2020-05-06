import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'
import { useFormik } from 'formik'
import { PlateContext } from 'providers/PlateProvider'
import Plates from 'components/Plates'
import Layout from 'components/Layout'
import validationSchema from './yup'
import * as s from './style'
import { TOKEN_COOKIE, STATUS } from 'utils/constants'

const Vehicles = ({ addPlate, deletePlate }) => {
  const { plates, setStatus } = useContext(PlateContext)
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      plate: ''
    },
    validationSchema,
    onSubmit: (field, { resetForm }) => {
      addPlate(field)
      setStatus(STATUS.pending)
      resetForm()
    }
  })

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
          <Plates plates={plates} deletePlate={deletePlate} />
        </s.Wrapper>
      </Layout>
    </>
  )
}

Vehicles.propTypes = {
  addPlate: PropTypes.func,
  deletePlate: PropTypes.func
}

export default Vehicles
