import styled from 'styled-components'
import { FacebookSquare, GooglePlus, Instagram as Ig, Linkedin as In } from '@styled-icons/boxicons-logos'

export const Wrapper = styled.footer`
  color: ${({ theme }) => theme.color.white};
  `

export const Network = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.oriente};
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

export const NetworkText = styled.p`
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
`

export const Copyright = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.prussianblue};
`

export const CopyText = styled.p`
  text-align: center;
  font-size: 1.2rem;
`

export const Facebook = styled(FacebookSquare)`
  width: 32px;
  color: ${({ theme }) => theme.color.white};
`

export const Google = styled(GooglePlus)`
  width: 32px;
  color: ${({ theme }) => theme.color.white};
`

export const Instagram = styled(Ig)`
  width: 32px;
  color: ${({ theme }) => theme.color.white};
`

export const Linkedin = styled(In)`
  width: 32px;
  color: ${({ theme }) => theme.color.white};
`
