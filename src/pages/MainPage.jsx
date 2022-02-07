import React from 'react';
import { useHistory } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'

// IMPORTS
import CityList from './../components/CityList/CityList'
import AppFrame from './../components/AppFrame/AppFrame'

const MainPage = () => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push('/city')
  }

  const cities = [
    { city: "Mar del Plata", country: "Argentina" },
    { city: "Sao Pablo", country: "Brasil" },
    { city: "Barcelona", country: "Spain" },
    { city: "Ciudad de Mexico", country: "Mexico" }
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
