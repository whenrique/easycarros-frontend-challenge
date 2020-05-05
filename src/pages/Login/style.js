import styled from 'styled-components'
import { ReactComponent as LogoSVG } from 'static/logo.svg'

export const Wrapper = styled.div`
  min-height: calc(100vh - 186px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  display: none;
`

export const Logo = styled(LogoSVG)`
  width: 300px;
  fill: ${({ theme }) => theme.color.oriente};
`

export const ErrorList = styled.ul`
  padding: 1rem;
  border-radius: 0.4rem;
  list-style: none;
`

export const ErrorItem = styled.li`
  color: ${({ theme }) => theme.color.error[800]};
  font-size: 1.4rem;
`
