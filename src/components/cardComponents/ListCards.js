import React from 'react';

import {
  CssBaseline,
  Typography,
  Card,
  Grid,
  Container,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import useStyles from '../../styles';

import { useNavigate } from 'react-router-dom';
import { useAxiosGet } from '../Hooks/HttpRequests';

const ListCards = () => {
  const clases = useStyles();
  const navigate = useNavigate();

  const url = 'https://api.openbrewerydb.org/breweries';

  // from Hooks components
  let brewery = useAxiosGet(url);

  return (
    <>
      <CssBaseline />
      <Container className={clases.cardGrid} maxWidth="md">
        <Grid container spacing={6}>
          {brewery.map((item) => {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <Card className={clases.card}>
                  <CardContent className={clases.CardContent}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ color: 'orange' }}
                    >
                      {item.name}
                    </Typography>

                    <Typography>
                      <strong>brewery type:</strong> {item.brewery_type}
                    </Typography>
                    <Typography>
                      <strong>city:</strong> {item.city}
                    </Typography>
                    <Typography>
                      <strong>country:</strong> {item.country}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      color="primary"
                      onClick={(e) => {
                        navigate(`/brewerydetails/${item.id}`);
                      }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ListCards;
