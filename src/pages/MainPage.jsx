import React from 'react';
import { useHistory } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'

// IMPORTS
import CityList from './../components/CityList/CityList'
import AppFrame from './../components/AppFrame/AppFrame'

const MainPage = () => {
  const history = useHistory()

  const onClickHandler = (city, countryCode) => {
    
    console.log(city, countryCode);
    
    history.push(`/city/${countryCode}/${city}`)
  }

  const cities = [
    { city: "Mar del Plata", country: "Argentina", countryCode: "AR" },
    { city: "London", country: "Great Britain", countryCode: "GB" },
    { city: "Barcelona", country: "Spain", countryCode: "ES" },
    { city: "Mexico City", country: "Mexico", countryCode: "MX" }
  ]

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
    );
};

export default MainPage;
