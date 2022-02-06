import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'

// IMPORTS PROBLEM
import IconState from './../IconState/IconState'

const Weather = ({ temperature, state }) => {
  return (
    <div>
        <IconState state={state} />
        <Typography display="inline" variant="h3" > {temperature} </Typography>
    </div>
  );
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
};

export default Weather;
