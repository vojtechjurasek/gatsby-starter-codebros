import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Link as RebassLink } from 'rebass/styled-components'

const LinkButton = ({ children, variant, ...rest }) => {
  return (
    <RebassLink as={GatsbyLink} variant={variant || 'primary'} {...rest}>
      {children}
    </RebassLink>
  )
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default LinkButton
