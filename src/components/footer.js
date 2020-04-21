import React from 'react'

import Container from './container'

const Footer = () => (
  <footer>
    <Container>{`© ${new Date().getFullYear()}`}</Container>
  </footer>
)

export default Footer
