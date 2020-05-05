import React from 'react'
import PropTypes from 'prop-types'
import * as s from './style'

export const Label = ({ label, htmlFor }) => (
  <s.Label htmlFor={htmlFor}>
    {label}
  </s.Label>
)

Label.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string
}
