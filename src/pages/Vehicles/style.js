import styled from 'styled-components'
import { Label, Form, Button } from 'components/Form'

export const AddVehicle = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
`

export const AddVehicleLabel = styled(Label)`
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
  width: 100%;
`

export const AddVehicleButton = styled(Button)`
  width: 35px;
`
