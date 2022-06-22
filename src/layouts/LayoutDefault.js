import React from "react";

import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const siteTitle = "endla";

const LayoutDefault = ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" href="/favicon.svg" />
    </Helmet>
    <Header navPosition="right" />

    <main className="site-content">{children}</main>
    <Footer />
  </>
);

export default LayoutDefault;
