import React, { useMemo } from 'react';
import { Link } from 'react-router-dom'

import useCityPage from './../hooks/useCityPage'
import useCityList from './../hooks/useCityList'

import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/serviceCities'

// Styles
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'

// IMPPORTS PROBLEM
import CityInfo from './../components/CityInfo/CityInfo' 
import Weather from './../components/Weather/Weather' 
import WeatherDetails from './../components/WeatherDetails/WeatherDetails' 
import ForecastChart from './../components/ForecastChart/ForecastChart' 
import Forecast from './../components/Forecast/Forecast' 
import Alert from '@material-ui/lab/Alert'

import AppFrame from './../components/AppFrame/AppFrame'

const CityPage = ({ allWeather, onSetAllWeather }) => {

  const { city, countryCode, chartData, forecastItemList, error, setError } = useCityPage()
  
  const cities = useMemo(() => ([{city, countryCode}]), [city,countryCode])
  
  useCityList(cities, onSetAllWeather)

  const weather = allWeather[getCityCode(city,countryCode)]


  // CityInfo
  const country = countryCode && getCountryNameByCountryCode({ countryCode })

  // Weather
  const state = weather && weather.state, //'clouds'
        temperature = weather && weather.temperature // 10

  // WeatherDetails
  const humidity = weather && weather.humidity,
        wind = weather && weather.temperature

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
        <CityInfo city={city} country={country} />
      </Grid>

      <Grid container item xs={12} 
        justifyContent='center'
        alignItems='center'
      >
          <Weather state={state} temperature={temperature} />
          {
            humidity && wind && 
            <WeatherDetails humidity={humidity} wind={wind} />
          }
      </Grid>

      <Grid item>
        {
          !chartData && !forecastItemList && <LinearProgress />
        }
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
