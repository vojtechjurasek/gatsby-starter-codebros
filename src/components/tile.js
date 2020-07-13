import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Text, Box, Image } from 'rebass/styled-components'
import BackgroundImage from 'gatsby-background-image'

import IconJob from '../images/icons/job.svg'
import IconPlant from '../images/icons/plant.svg'

const icons = {
  job: IconJob,
  plant: IconPlant,
}

const Tile = ({ title, icon, variant, to, image }) => {
  const selectedIcon = icons[icon]

  return (
    <Flex
      as={BackgroundImage}
      fluid={image.childImageSharp.fluid}
      sx={{
        width: '100%',
        bg: variant,
        '&:after, &:before': {
          mixBlendMode: 'multiply !important',
          opacity: '0.3 !important',
        },
      }}
      alt=""
    >
      <Flex as={GatsbyLink} to={to} variant={`tile-${variant}`}>
        <Flex variant="tile.body">
          {selectedIcon && (
            <Box variant="tile.iconWrapper" sx={{ bg: variant }}>
              <Image variant="tile.icon" src={selectedIcon} alt={title} />
            </Box>
          )}

          <Text variant="tile.title" as="p">
            {title}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  variant: PropTypes.string,
  to: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

Tile.defaultProps = {
  variant: 'primary',
}

export default Tile
