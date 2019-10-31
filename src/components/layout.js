import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle';
import light from '../themes/default';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={light}>
      <Reset />
      <GlobalStyle />

      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
