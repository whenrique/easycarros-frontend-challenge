import React from 'react'
import PropTypes from 'prop-types'
import Plate from 'components/Plate'
import * as s from './style'

const Plates = ({ plates }) => (
  <s.Wrapper>
    {plates && plates.map(plate => (
      <Plate key={plate.id} plateID={plate.plate} />
    ))}
  </s.Wrapper>
)

Plates.propTypes = {
  plates: PropTypes.array
}

export default Plates
