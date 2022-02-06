import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import { CityInfo, Weather } from '../index'

// Una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <li key={city} onClick={eventOnClickCity}>
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

const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
        {
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
        }
    </ul>
  );
};

CityList.propTypes = {
    cities: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    }).isRequired,
    onClickCity: PropTypes.func.isRequired
};

export default CityList;
