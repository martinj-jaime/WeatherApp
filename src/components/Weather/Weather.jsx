import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import IconState from '../index'

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
