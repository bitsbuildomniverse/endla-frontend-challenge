import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, preview, image, url, type = 'website' }) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      {/* Open Graph / Facebook */}
      <meta
        name="title"
        property="og:title"
        content={title}
        key="title"
      />
      <meta
        property="og:type"
        content={type}
      />
      <meta
        name="description"
        property="og:description"
        content={preview}
      />
      <meta
        name="image"
        property="og:image"
        content={image}
      />
      <meta
        property="og:url"
        content={url}
      />
    </Helmet>
  );
};

export default Meta;
