import React from 'react';
import { useHistory } from 'react-router-dom'

import { getCities } from '../utils/serviceCities'

// Styles
import Paper from '@material-ui/core/Paper'

// IMPORTS
import CityList from './../components/CityList/CityList'
import AppFrame from './../components/AppFrame/AppFrame'

const MainPage = ({ allWeather, onSetAllWeather }) => {
  const history = useHistory()

  const onClickHandler = (city, countryCode) => {    
    history.push(`/city/${countryCode}/${city}`)
  }

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={getCities()} onClickCity={onClickHandler} allWeather={allWeather} onSetAllWeather={onSetAllWeather} />
      </Paper>
    </AppFrame>
    );
};

export default MainPage;
