import React from 'react'
import PropTypes from 'prop-types'
import * as s from './style'

const Plate = ({ plate, plateId, deletePlate }) => {
  return (
    <s.Wrapper>
      {plate}
      <s.Delete onClick={() => deletePlate(plate, plateId)} />
    </s.Wrapper>
  )
}

Plate.propTypes = {
  plate: PropTypes.string,
  plateId: PropTypes.string,
  deletePlate: PropTypes.func
}

export default Plate
