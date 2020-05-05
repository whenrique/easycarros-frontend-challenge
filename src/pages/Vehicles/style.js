import styled from 'styled-components'
import { Plus } from 'styled-icons/boxicons-regular'
import { Form, Label, Input, Button } from 'components/Form'

export const Wrapper = styled.div`
  min-height: calc(100vh - 238px);
`

export const AddVehicle = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`

export const AddVehicleLabel = styled(Label)`
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
  width: 100%;
`

export const AddVehicleInput = styled(Input)`
  width: 80%;
`

export const AddVehicleButton = styled(Button)`
  width: 35px;
  padding: 0;
`

export const PlusSign = styled(Plus)`
  width: 24px;
  fill: ${({ theme }) => theme.color.white};
`

export const ErrorList = styled.ul`
  border-radius: 0.4rem;
  list-style: none;
  width: 100%;
`

export const ErrorItem = styled.li`
  color: ${({ theme }) => theme.color.error[800]};
  font-size: 1.4rem;
`
