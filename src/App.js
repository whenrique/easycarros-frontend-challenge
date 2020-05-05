import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Login from 'pages/Login'
import Vehicles from 'pages/Vehicles'
import Header from 'components/Header'
import Footer from 'components/Footer'
import GlobalStyle from 'utils/global-styles'
import { isAuth } from 'utils/auth'
import { TOKEN_COOKIE } from 'utils/constants'

const App = () => {
  const [auth, setAuth] = useState(false)

  const showHeader = () => {
    const authenticated = isAuth(TOKEN_COOKIE)
    setAuth(authenticated)
  }

  useEffect(() => {
    showHeader()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        { auth && (
          <Header />
        )}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/vehicles">
            <Vehicles />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
