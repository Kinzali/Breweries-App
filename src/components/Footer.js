import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../styles';

const Footer = () => {
  const clases = useStyles();
  return (
    <footer className={clases.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Breweries App
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        gutterBottom
      ></Typography>
    </footer>
  );
};

export default Footer;
