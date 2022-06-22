import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer className="custom-fotter">
      <Typography
        variant="subtitle2"
        align="center"
        gutterBottom
      >
        © Endla Pty Ltd {new Date().getFullYear()}
        <br />
        Brisbane, Austrailia
      </Typography>
    </footer>
  );
};

export default Footer;
