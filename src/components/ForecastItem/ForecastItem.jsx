import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { IconContext } from 'react-icons'

// IMPORTS PROBLEM
import IconState from './../IconState/IconState'

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  const iconContextSize = useMemo(() => ({ size: '5rem' }), [])
  return (
    <>
      <Grid container
        direction='column'
        justifyContent='center'
        alignItems='center'  
      >
        <Grid item>
          <Typography variant='h6'> {weekDay} </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h6'> {hour} </Typography>
        </Grid>
        <Grid item>
          <IconContext.Provider value={iconContextSize}>
            <IconState state={state} />
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <Typography variant='h6'> {temperature} º</Typography>
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
