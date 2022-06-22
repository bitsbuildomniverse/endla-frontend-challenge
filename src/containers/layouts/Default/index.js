import React from 'react';

import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const LayoutDefault = ({ children }) => (
  <>
    <Helmet>
      <link
        rel="icon"
        href="/favicon.svg"
      />
    </Helmet>

    <Header navPosition="right" />
    <main className="site-content">{children}</main>
    <Footer />
  </>
);

export default LayoutDefault;
