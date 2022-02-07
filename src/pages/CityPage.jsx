import React from 'react';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

// IMPPORTS PROBLEM
import CityInfo from './../components/CityInfo/CityInfo' 
import Weather from './../components/Weather/Weather' 
import WeatherDetails from './../components/WeatherDetails/WeatherDetails' 
import ForecastChart from './../components/ForecastChart/ForecastChart' 
import Forecast from './../components/Forecast/Forecast' 

const dataExample = [
  {
      "dayHour": "Jue 18",
      "min": 14,
      "max": 22,
  },
  {
      "dayHour": "Vie 06",
      "min": 18,
      "max": 27,
  },
  {
      "dayHour": "Vie 12",
      "min": 18,
      "max": 28,
  },
  {
      "dayHour": "Vie 18",
      "min": 18,
      "max": 25,
  },
  {
      "dayHour": "Sab 06",
      "min": 15,
      "max": 22,
  },
  {
      "dayHour": "Sab 12",
      "min": 12,
      "max": 19,
  }
]

const forecastItemListExample = [
  {weekDay: 'Lunes', hour: 12, state:'sunny', temperature:18},
  {weekDay: 'Martes', hour: 12, state:'sunny', temperature:18},
  {weekDay: 'Miercoles', hour: 12, state:'sunny', temperature:18},
  {weekDay: 'Jueves', hour: 12, state:'sunny', temperature:18},
  {weekDay: 'Viernes', hour: 12, state:'sunny', temperature:18},
  {weekDay: 'Sabado', hour: 12, state:'sunny', temperature:18},
  {weekDay: 'Domingo', hour: 12, state:'sunny', temperature:18}
]

const CityPage = () => {

  // CityInfo
  const city = 'Mar del Plata', 
        country = 'Argentina';

  // Weather
  const state = 'cloudy',
        temperature = 20;

  // WeatherDetails
  const humidity = 80,
        wind = 20;

  // ForecastChart
  const data = dataExample

  // Forecast
  const forecastItemList = forecastItemListExample

  return (
    <Grid container
      justifyContent="center"
    >
      <Grid item xs={12} >
        <CityInfo city={city} country={country} />
      </Grid>

      <Grid item xs={12} >
        <Grid item xs={8} >
          <Weather state={state} temperature={temperature} />
        </Grid>
        <Grid item xs={4} >
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
      </Grid>

      <Grid item xs={12} >
        <ForecastChart data={data} />
      </Grid>

      <Grid item xs={12} >
        <Forecast forecastItemList={forecastItemList} />
      </Grid>

      <div>
          <Link to='/main' >
            back to main
          </Link>
      </div>
    </Grid>
    );
};

export default CityPage;
