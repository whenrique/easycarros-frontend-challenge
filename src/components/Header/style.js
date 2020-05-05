import styled from 'styled-components'
import { Menu as MenuIcon } from 'styled-icons/boxicons-regular'

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.prussianblue};
  color: ${({ theme }) => theme.color.white};
  padding: 1rem;
`

export const Menu = styled(MenuIcon)`
  fill: ${({ theme }) => theme.color.white};
  width: 32px;
  cursor: pointer;
`
