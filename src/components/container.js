import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass/styled-components'

const Container = ({ children, width = 1200, px = 3 }) => (
  <Box
    sx={{
      maxWidth: width,
      width: '100%',
      mx: 'auto',
      px,
    }}
  >
    {children}
  </Box>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  px: PropTypes.number,
}

Container.defaultProps = {
  width: 1200,
  px: 3,
}

export default Container
