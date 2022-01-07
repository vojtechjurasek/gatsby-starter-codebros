import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <h1>Stránka neexistuje</h1>
    <p>
      Tato stránka neexistuje. Zkuste to z <Link href="/">hlavní strany</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
