import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import { CityInfo, Weather } from '../index'

const renderCityAndCountry = cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <li key={city}>
            <Grid container
                justifyContent="center"
                alignItems="center"    
            >
                <Grid item md={8} xs={12} >
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={4} xs={12} >
                    <Weather temperature={10} state={"cloudy"} />
                </Grid>
            </Grid>
        </li>
    )
}

const CityList = ({ cities }) => {
  return (
    <ul>
        {
            cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
        }
    </ul>
  );
};

CityList.propTypes = {
    cities: PropTypes.array.isRequired
};

export default CityList;
