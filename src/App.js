import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PlateContext } from 'providers/PlateProvider'
import theme from 'utils/theme'
import Login from 'pages/Login'
import Vehicles from 'pages/Vehicles'
import Header from 'components/Header'
import Footer from 'components/Footer'
import GlobalStyle from 'utils/global-styles'
import { isAuth } from 'utils/auth'
import { TOKEN_COOKIE, STATUS, REQUEST_MESSAGE } from 'utils/constants'
import { setPlate, getPlates, deletePlate } from 'utils/plates'

toast.configure({
  autoClose: 8000,
  transition: Slide,
  progressStyle: {
    background: theme.color.prussianblue
  }
})

const App = () => {
  const [auth, setAuth] = useState(false)
  const [plates, setPlates] = useState([])
  const [status, setStatus] = useState(STATUS.pending)

  const addPlate = async (plate) => {
    try {
      const { data } = await setPlate(plate)

      if (!data) throw new Error(REQUEST_MESSAGE.ERROR.CONNECTION)

      toast(`Vehicle ${plate.plate} was added`)
    } catch (err) {
      toast(err.message, Slide)
      return err
    }
  }

  const removePlate = (plate, plateId) => {
    confirmAlert({
      title: `Are you removing ${plate} vehicle?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              const status = await deletePlate(plateId)

              if (status !== 204) throw new Error(REQUEST_MESSAGE.ERROR.CONNECTION)

              setStatus(STATUS.pending)
            } catch (err) {
              toast(err.message, Slide)
              return err
            }
          }
        },
        {
          label: 'No',
          onClick: () => false
        }
      ]
    })
  }

  useEffect(() => {
    const authenticated = isAuth(TOKEN_COOKIE)
    setAuth(authenticated)
  }, [])

  useEffect(() => {
    async function fetchPlates () {
      try {
        const { data } = await getPlates()

        if (!data) throw new Error(REQUEST_MESSAGE.ERROR.CONNECTION)

        setPlates(data)
        setStatus(STATUS.resolved)
      } catch (err) {
        toast(err.message, Slide)
        return err
      }
    }
    fetchPlates()
  }, [status])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        { auth && (
          <Header />
        )}
        <PlateContext.Provider value={{ plates, status, setStatus, setAuth }}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/vehicles">
              <Vehicles addPlate={addPlate} deletePlate={removePlate} />
            </Route>
          </Switch>
        </PlateContext.Provider>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
