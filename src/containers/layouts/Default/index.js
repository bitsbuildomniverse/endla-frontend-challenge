import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from './Header';
import Footer from './Footer';

import './style.scss';

const LayoutDefault = ({ children }) => (
  <>
    <Helmet>
      <link
        rel="icon"
        href="/favicon.svg"
      />
    </Helmet>
    <CssBaseline />
    <Header />
    <main>
      <Container maxWidth="sm">{children}</Container>
    </main>
    <Footer />
  </>
);

export default LayoutDefault;
