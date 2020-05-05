import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import Layout from 'components/Layout'
import { Form, Label, Input, Button } from 'components/Form'
import * as s from './style'
import signin from 'utils/signin'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'frontend-dev@easycarros.com',
      password: 'Fr0nt3ndR0ck5!'
    },
    onSubmit: fields => signin(fields)
  })

  return (
    <Layout>
      <s.Wrapper>
        <s.Heading>EasyCarros</s.Heading>
        <Link to="/" title="EasyCarros - homepage">
          <s.Logo />
        </Link>
        <Form method='POST' handleSubmit={formik.handleSubmit}>
          <Label htmlFor="email" label="Username:" />
          <Input placeholder="Your email" name="email" id="email" type="email" value={formik.values.email} onChange={formik.handleChange} />
          <Label htmlFor="password" label="Password:" />
          <Input placeholder="Your password" name="password" id="password" type="password" value={formik.values.password} onChange={formik.handleChange} />
          <Button value="Sign In" type="submit" />
        </Form>
      </s.Wrapper>
    </Layout>
  )
}

Login.propTypes = {}

export default Login
