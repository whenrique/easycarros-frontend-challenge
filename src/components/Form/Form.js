import styled from 'styled-components'

export const Form = styled.form`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;

  > * {
    margin: 0.6rem;
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.color.prussianblue};
  font-size: 1.4rem;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.prussianblue};
  border-radius: 0.6rem;
  padding: 1rem;
`

export const Button = styled.button`
  border: 0;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.color.prussianblue};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  padding: 1rem;
`
