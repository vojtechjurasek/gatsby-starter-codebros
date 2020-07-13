import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from 'rebass/styled-components'

import Tile from './tile'

const Tiles = () => {
  const data = useStaticQuery(graphql`
    query {
      environment: file(relativePath: { eq: "environment.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      jobOffer: file(relativePath: { eq: "job-offer.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Flex variant="tiles">
      <Tile
        title="Environmentální politika společnosti"
        icon="plant"
        variant="green"
        to="/environmentalni-politika"
        image={data.environment}
      />
      <Tile
        title="Nabídka zaměstnání"
        icon="job"
        variant="primary"
        to="/nabidka-zamestnani"
        image={data.jobOffer}
      />
    </Flex>
  )
}

export default Tiles
