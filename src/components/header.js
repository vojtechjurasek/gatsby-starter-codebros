import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Box, Flex } from 'rebass/styled-components'

import Container from './container'
import Logo from '../images/logo.svg'

const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  max-height: 64px;
`

const Header = ({ siteTitle }) => (
  <Box variant="header" as="header">
    <Container>
      <Flex>
        <Link to="/">
          <StyledLogo src={Logo} alt={siteTitle} />
        </Link>
      </Flex>
    </Container>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
