import React from 'react'
import PropTypes from 'prop-types'
import * as s from './style'

const Layout = ({ children }) => (
  <s.Main>
    { children }
  </s.Main>
)

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
