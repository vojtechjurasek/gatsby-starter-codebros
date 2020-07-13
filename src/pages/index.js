import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Dodávky ve stavebnictví a tepelné energetice" />

    <Hero
      title="Budujeme cesty k teplu..."
      subtitle="Komplexní dodávky ve stavebnictví a tepelné energetice pro objekty občanské a průmyslové výstavby."
      ctaLabel="Více informací"
      ctaLink="/"
    />
  </Layout>
)

export default IndexPage
