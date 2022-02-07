import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './CityList.css'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// IMPORTS PROBLEM
import CityInfo from './../CityInfo/CityInfo'
import Weather from './../Weather/Weather'
// import { CityInfo, Weather } from '../index'
// import CityInfo from '../CityInfo'
// import Weather from '../Weather'


// Una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <ListItem 
        button
        key={city} 
        onClick={eventOnClickCity}
        >
            <Grid container
                justifyContent="center"
                alignItems="center" 
            >
                <Grid item md={9} xs={12} >
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={3} xs={12} >
                    <Weather temperature={10} state={"cloudy"} />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
        {
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
        }
    </List>
  );
};

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList;
