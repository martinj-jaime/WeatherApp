import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

// IMPORTS PROBLEM
import IconState from './../IconState/IconState'

const Weather = ({ temperature, state }) => {
  return (
    <Grid container item 
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={1}
    >
        <IconState state={state} />
        <Typography display="inline" variant="h2" > {temperature} </Typography>
    </Grid>
  );
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
};

export default Weather;
