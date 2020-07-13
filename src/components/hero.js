import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Box, Flex, Heading, Text } from 'rebass/styled-components'
import BackgroundImage from 'gatsby-background-image'

import Container from './container'
import LinkButton from './link-button'

const Hero = ({ title, subtitle, ctaLabel, ctaLink }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Flex variant="hero">
      <Box
        as={BackgroundImage}
        fluid={data.image.childImageSharp.fluid}
        sx={{
          width: '100%',
          '&:after, &:before': {
            mixBlendMode: 'lighten !important',
            opacity: '0.3 !important',
          },
        }}
        alt=""
      >
        <Box variant="hero.body">
          <Container>
            <Box variant="hero.text">
              {title && (
                <Heading variant="hero.title" as="h1">
                  {title}
                </Heading>
              )}

              {subtitle && (
                <Text variant="hero.subtitle" as="p">
                  {subtitle}
                </Text>
              )}

              {ctaLabel && ctaLink && (
                <LinkButton to={ctaLink} variant="link.primary">
                  {ctaLabel}
                </LinkButton>
              )}
            </Box>
          </Container>
        </Box>
      </Box>
    </Flex>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaLabel: PropTypes.string,
  ctaLink: PropTypes.string,
}

export default Hero
