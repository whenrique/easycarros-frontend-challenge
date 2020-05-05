import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import signin from 'utils/signin'
import Layout from 'components/Layout'
import { Form, Label, Input, Button } from 'components/Form'
import * as s from './style'
import validationSchema from './yup'
import { FORM_MESSAGES } from 'utils/constants'

const Login = () => {
  const [error, setError] = useState(false)
  const formik = useFormik({
    initialValues: {
      // email: 'frontend-dev@easycarros.com',
      // password: 'Fr0nt3ndR0ck5!'
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: fields => signin(fields, handleSubmitError)
  })

  const handleSubmitError = () => {
    setError(true)
  }

  return (
    <Layout>
      <s.Wrapper>
        <s.Heading>EasyCarros</s.Heading>
        <Link to="/" title="EasyCarros - homepage">
          <s.Logo />
        </Link>
        <Form method='POST' handleSubmit={formik.handleSubmit}>
          <Label htmlFor="email" label="Username:" />
          <Input placeholder="Your email" name="email" id="email" type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleChange} />
          <Label htmlFor="password" label="Password:" />
          <Input placeholder="Your password" name="password" id="password" type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <s.ErrorList>
            {(formik.errors.email && formik.touched.email) && (
              <s.ErrorItem>&bull; {formik.errors.email}</s.ErrorItem>
            )}
            {(formik.errors.password && formik.touched.password) && (
              <s.ErrorItem>&bull; {formik.errors.password}</s.ErrorItem>
            )}
            {(error) && (
              <s.ErrorItem>&bull; {FORM_MESSAGES.ERROR}</s.ErrorItem>
            )}
          </s.ErrorList>
          <Button value="Sign In" type="submit" />
        </Form>
      </s.Wrapper>
    </Layout>
  )
}

Login.propTypes = {}

export default Login
