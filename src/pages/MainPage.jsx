import React from 'react';
import { useHistory } from 'react-router-dom'

// IMPORTS PROBLEM
import CityList from './../components/CityList/CityList'

// import CityList from './../components/index'
// import CityList from './../components/CityList/index'


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
    <div>
        <h2>City List</h2>
        <CityList cities={cities} onClickCity={onClickHandler} />
    </div>
    );
};

export default MainPage;
