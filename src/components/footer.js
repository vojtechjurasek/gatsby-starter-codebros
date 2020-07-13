import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, Image, Text } from 'rebass/styled-components'

import Container from './container'
import FooterLogo from '../images/footer-logo.svg'

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          address {
            street
            city
            postal
            country
          }
        }
      }
    }
  `)
  const { title, address } = site.siteMetadata
  const { street, city, postal, country } = address
  const currentYear = new Date().getFullYear()

  return (
    <Box variant="footer" as="footer">
      <Container width="800px">
        <Flex sx={{ mb: 4 }}>
          <Box>
            <Box variant="footer.address" as="ul">
              <li>
                <strong>{title}</strong>
              </li>
              <li>{street}</li>
              <li>{`${postal} ${city}`}</li>
              <li>{country}</li>
            </Box>
          </Box>
        </Flex>

        <Flex sx={{ alignItems: 'center' }}>
          <Image src={FooterLogo} alt="" sx={{ mr: 4 }} />

          <Text as="p">{`Copyright © 2019-${currentYear} ${title}`}</Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
