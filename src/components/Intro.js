import React from 'react';
import { Container, Typography, CssBaseline } from '@material-ui/core';
import useStyles from '../styles';

const Intro = () => {

  const clases = useStyles()
  return (
    <div className={clases.container}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Breweries App
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          laboriosam labore deleniti, magnam maiores mollitia culpa neque et eos
          eum impedit cupiditate, quasi adipisci sapiente, iste porro deserunt
          nihil quas?
        </Typography>
      </Container>
    </div>
  );
};

export default Intro;
