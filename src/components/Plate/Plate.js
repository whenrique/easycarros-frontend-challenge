import React from 'react'
import PropTypes from 'prop-types'
import * as s from './style'

const Plate = ({ plateID }) => (
  <s.Wrapper>
    {plateID}
    <s.Delete onClick={() => console.log('deletou')} />
  </s.Wrapper>
)

Plate.propTypes = {
  plateID: PropTypes.string
}

export default Plate
