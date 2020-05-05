import styled from 'styled-components'
import { XCircle } from 'styled-icons/boxicons-regular'

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.prussianblue};
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  margin-bottom: 1rem;
  font-size: 2rem;
`

export const Delete = styled(XCircle)`
  fill: ${({ theme }) => theme.color.error[500]};
  width: 35px;
  cursor: pointer;
`
