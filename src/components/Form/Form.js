import React from 'react'
import PropTypes from 'prop-types'
import * as s from './style'

export const Form = ({ children, handleSubmit, method }) => (
  <s.Wrapper onSubmit={handleSubmit} method={method}>
    {children}
  </s.Wrapper>
)

Form.propTypes = {
  children: PropTypes.element.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired
}
