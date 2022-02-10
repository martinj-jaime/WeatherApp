import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/es'
import convertUnits from 'convert-units'

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

  const [data,setData] = useState(null)
  const [forecastItemList,setForecastItemList] = useState(null)
  const [error, setError] = useState(null);

  const { city, countryCode } = useParams()

  useEffect(() => {
    const getForecast = async () => {

      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
      try {
        const { data } = await axios.get(url)

        const toCelcius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))

        // ForecastChart DATA //
        const daysAhead = [0,1,2,3,4,5]
        const days = daysAhead.map(d => moment().add(d, 'd'))
        const dataAux = days.map(day => {

          const tempObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
          })

          const temps = tempObjArray.map(item => item.main.temp)

          return ({
            dayHour: day.format('ddd'),
            min: toCelcius(Math.min(...temps)),
            max: toCelcius(Math.max(...temps))
          })
        })

        setData(dataAux)

        // Forecast DATA //
        const interval = [4,8,12,16,20,24]
        const forecastItemListAux = data.list
        .filter((item, index) => interval.includes(index))
        .map(item => {
          console.log(item)
          console.log(item.dt)
          return ({
            hour: moment.unix(item.dt).hour(),
            weekDay: moment.unix(item.dt).format('dddd'),
            state: item.weather[0].main.toLowerCase(),
            temperature: toCelcius(item.main.temp)
          })
        })

        setForecastItemList(forecastItemListAux)

      } catch(err) {
        if(err.response) { 
          setError("Ha ocurrido un error en el servidor del clima")
        } else if(err.request) { 
          setError("Ha ocurrido un error, verifique la conexion a internet")
        } else { 
          setError('Error al cargar los datos');
        }
      } 
    }

    getForecast()
    
  }, [city,countryCode])
  
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
          data && <ForecastChart data={data} /> 
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
