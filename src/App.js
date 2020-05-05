import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Login from 'pages/Login'
import Vehicles from 'pages/Vehicles'
import Footer from 'components/Footer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
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
