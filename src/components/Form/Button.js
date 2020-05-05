import React from 'react'
import PropTypes from 'prop-types'
import * as s from './style'

export const Button = ({ value, type, handleClick }) => (
  <s.Button onClick={handleClick} type={type}>
    {value}
  </s.Button>
)

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func
}
