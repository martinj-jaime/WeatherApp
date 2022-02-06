import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

// IMPORTS PROBLEM
import IconState from './../IconState/IconState'

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <>
      <Grid container
        direction='column'
        justifyContent='center'
        alignItems='center'  
      >
        <Grid item>
          <Typography variant='h3'> {weekDay} </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h3'> {hour} </Typography>
        </Grid>
        <Grid item>
          <IconState state={state} />
        </Grid>
        <Grid item>
          <Typography variant='h3'> {temperature} º</Typography>
        </Grid>
      </Grid>
    </>
  );
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired
};

export default ForecastItem;
