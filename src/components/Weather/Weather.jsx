import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'

// IMPORTS PROBLEM
import IconState from './../IconState/IconState'
import { validValues } from './../IconState/IconState'

const Weather = ({ temperature, state }) => {
  return (
    <Grid container item 
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={1}
    >
      {
        state ? <IconState state={state} /> : 
        <Skeleton variant='circle' height={80} width={80}></Skeleton>
      }
      {
        temperature ? <Typography display="inline" variant="h2" > {temperature} </Typography> : 
        <Skeleton variant='rect' height={80} width={80}></Skeleton>
      } 
    </Grid>
  )
};

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues)
};

export default Weather;
