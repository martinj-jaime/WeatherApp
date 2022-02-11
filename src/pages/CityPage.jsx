import React from 'react';
import { Link } from 'react-router-dom'

import useCityPage from './../hooks/useCityPage'

// Styles
import { Grid } from '@material-ui/core'

// IMPPORTS PROBLEM
import CityInfo from './../components/CityInfo/CityInfo' 
import Weather from './../components/Weather/Weather' 
import WeatherDetails from './../components/WeatherDetails/WeatherDetails' 
import ForecastChart from './../components/ForecastChart/ForecastChart' 
import Forecast from './../components/Forecast/Forecast' 
import Alert from '@material-ui/lab/Alert'

import AppFrame from './../components/AppFrame/AppFrame'

const CityPage = () => {

  const { city, countryCode, chartData, forecastItemList, error, setError } = useCityPage()

  // Weather
  const state = 'clouds',
        temperature = 20;

  // WeatherDetails
  const humidity = 80,
        wind = 20;

  return (
    <AppFrame>
    {
      error && <Alert severity="error" onClose={() => setError(null)}> {error} </Alert>
    }
    <Grid container
      justifyContent="space-around"
      direction="column"
      spacing={2}
    >
      <Grid item container 
        xs={12} 
        justifyContent='center'
        alignItems='flex-end'
      >
        <CityInfo city={city} country={countryCode} />
      </Grid>

      <Grid container item xs={12} 
        justifyContent='center'
        alignItems='center'
      >
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humidity={humidity} wind={wind} />
      </Grid>

      <Grid item xs={12} >
        {
          chartData && <ForecastChart data={chartData} /> 
        }
      </Grid>

      <Grid item xs={12} >
        {
          forecastItemList && <Forecast forecastItemList={forecastItemList} />
        } 
      </Grid>

      <div>
          <Link to='/main' >
            back to main
          </Link>
      </div>
    </Grid>
    </AppFrame>
    );
};

export default CityPage;
