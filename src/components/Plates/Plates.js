import React from 'react'
import PropTypes from 'prop-types'
import Plate from 'components/Plate'
import * as s from './style'

const Plates = ({ plates, deletePlate }) => (
  <s.Wrapper>
    {plates && plates.map(plate => (
      <Plate key={plate.id} plateId={plate.id} plate={plate.plate} deletePlate={deletePlate} />
    ))}
  </s.Wrapper>
)

Plates.propTypes = {
  plates: PropTypes.array,
  deletePlate: PropTypes.func
}

export default Plates
