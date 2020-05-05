import React from 'react'
import * as s from './style'

const Footer = () => (
  <s.Wrapper>
    <s.Network>
      <s.NetworkText>Follow us</s.NetworkText>
      <a href="https://facebook.com" rel="noopener noreferrer" target="_blank" title="Facebook">
        <s.Facebook />
      </a>
      <a href="https://instagram.com" rel="noopener noreferrer" target="_blank" title="Instagram">
        <s.Instagram />
      </a>
      <a href="https://google.com" rel="noopener noreferrer" target="_blank" title="Google Plus">
        <s.Google />
      </a>
      <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank" title="Linkedin">
        <s.Linkedin />
      </a>
    </s.Network>
    <s.Copyright>
      <s.CopyText>&copy; 2020 EasyCarros</s.CopyText>
    </s.Copyright>
  </s.Wrapper>
)

export default Footer
