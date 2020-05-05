import React from 'react'
import PropTypes from 'prop-types'
import * as s from './style'

export const Input = ({ placeholder, name, id, type, value, onChange }) => (
  <s.Input placeholder={placeholder} name={name} id={id} type={type} value={value} onChange={onChange} />
)

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}
