import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from 'utils/global-styles'
import * as s from './style'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <s.Main>
      { children }
    </s.Main>
  </>
)

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
