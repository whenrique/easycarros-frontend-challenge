import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'
import { useFormik } from 'formik'
import { signin } from 'utils/auth'
import Layout from 'components/Layout'
import { Form, Label, Input, Button } from 'components/Form'
import * as s from './style'
import validationSchema from './yup'
import { FORM_MESSAGE, TOKEN_COOKIE } from 'utils/constants'
import { PlateContext } from 'providers/PlateProvider'

const Login = () => {
  const { setAuth } = useContext(PlateContext)
  const [error, setError] = useState(false)
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: fields => {
      signin(fields, handleSubmitSuccess, handleSubmitError)
      setAuth(true)
    }
  })

  const handleSubmitError = () => {
    setError(true)
  }

  const handleSubmitSuccess = () => {
    history.push('/vehicles')
  }

  useEffect(() => {
    if (Cookie.get(TOKEN_COOKIE)) {
      history.push('/vehicles')
    }
  }, [history])

  return (
    <Layout>
      <s.Wrapper>
        <s.Heading>EasyCarros</s.Heading>
        <Link to="/" title="EasyCarros - homepage">
          <s.Logo />
        </Link>
        <Form method='POST' onSubmit={formik.handleSubmit}>
          <Label htmlFor="email" >Username:</Label>
          <Input placeholder="Your email" name="email" id="email" type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleChange} />
          <Label htmlFor="password">Password:</Label>
          <Input placeholder="Your password" name="password" id="password" type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <s.ErrorList>
            {(formik.errors.email && formik.touched.email) && (
              <s.ErrorItem>&bull; {formik.errors.email}</s.ErrorItem>
            )}
            {(formik.errors.password && formik.touched.password) && (
              <s.ErrorItem>&bull; {formik.errors.password}</s.ErrorItem>
            )}
            {(error) && (
              <s.ErrorItem>&bull; {FORM_MESSAGE.INVALID}</s.ErrorItem>
            )}
          </s.ErrorList>
          <Button type="submit">Sign In</Button>
        </Form>
      </s.Wrapper>
    </Layout>
  )
}

Login.propTypes = {}

export default Login
