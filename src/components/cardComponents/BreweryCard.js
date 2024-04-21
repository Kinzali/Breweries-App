import React from 'react';
import { useParams } from 'react-router-dom';
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

const BreweryCard = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const clases = useStyles();

  const url = `https://api.openbrewerydb.org/breweries/${id}`;

  // from Hooks Componets
  let breweryDetails = useAxiosGet(url);

  // Button on Click Handler
  const clickHandler = () => {
    navigate('/');
  };

  return (
    <>
      <CssBaseline />
      <Container className={clases.cardGrid} maxWidth="md">
        <Button color="primary" onClick={clickHandler}>
          Go Back
        </Button>

        <Grid container spacing={6}  justify='center' alignItems='center' direction='column'>
          <Grid item >
            <Card className={clases.card}>
              <CardContent className={clases.CardContent}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ color: 'orange' }}
                >
                  {breweryDetails.name}
                </Typography>

                <Typography>
                  <strong>type:</strong> {breweryDetails.brewery_type}
                </Typography>
                <Typography>
                  <strong>Street:</strong> {breweryDetails.strret}
                </Typography>
                <Typography>
                  <strong> Address2: </strong> {breweryDetails.address2}
                </Typography>
                <Typography>
                  <strong> Address3: </strong> {breweryDetails.address3}
                </Typography>

                <Typography>
                  <strong>city:</strong> {breweryDetails.city}
                </Typography>
                <Typography>
                  <strong> state:</strong> {breweryDetails.state}
                </Typography>

                <Typography>
                  <strong> County province:</strong>{' '}
                  {breweryDetails.county_province}
                </Typography>
                <Typography>
                  <strong>Postal Code:</strong> {breweryDetails.postal_code}
                </Typography>
                <Typography>
                  <strong>country:</strong> {breweryDetails.country}
                </Typography>

                <Typography>
                  <strong>Longitude:</strong> {breweryDetails.longitude}
                </Typography>

                <Typography>
                  <strong>Latitude:</strong> {breweryDetails.latitude}
                </Typography>

                <Typography>
                  <strong>Phone:</strong> {breweryDetails.phone}
                </Typography>

                <Typography>
                  <strong>Website:</strong> {breweryDetails.website_url}
                </Typography>

                <Typography>
                  <strong>Updated At: </strong> {breweryDetails.updated_at}
                </Typography>

                <Typography>
                  <strong>Created At: </strong> {breweryDetails.created_at}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BreweryCard;
