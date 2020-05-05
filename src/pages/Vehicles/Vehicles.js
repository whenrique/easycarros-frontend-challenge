import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'
import Layout from 'components/Layout'
import * as s from './style'
import { Input } from 'components/Form'
import { TOKEN_COOKIE } from 'utils/constants'

const Vechiles = () => {
  const history = useHistory()

  useEffect(() => {
    if (!Cookie.get(TOKEN_COOKIE)) {
      history.push('/')
    }
  }, [history])

  return (
    <>
      <Layout>
        <s.AddVehicle onSubmit={(e) => {
          e.preventDefault()
          console.log('submit...')
        }} method="GET">
          <s.AddVehicleLabel htmlFor="plate">Add new plate</s.AddVehicleLabel>
          <Input placeholder="Your plate" name="plate" id="plate" />
          <s.AddVehicleButton type="submit" onClick={() => console.log('olá mundo')}>+</s.AddVehicleButton>
        </s.AddVehicle>
      </Layout>
    </>
  )
}

export default Vechiles
