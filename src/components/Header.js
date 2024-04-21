import React from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline, Toolbar, Typography, AppBar } from '@material-ui/core';

const Header = () => {
  return (
    <header>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
              margin: '0 60px',
            }}
          >
            BREWERIES APP
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
