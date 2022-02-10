import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import convertUnits from 'convert-units'

// Styles
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Alert from '@material-ui/lab/Alert'

// IMPORTS 
import CityInfo from './../CityInfo/CityInfo'
import Weather from './../Weather/Weather'

const getCityCode = (city, countryCode) => `${city}-${countryCode}`

// Una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode, country } = cityAndCountry
    //const { temperature, state } = weather

    return (
        <ListItem 
        button
        key={getCityCode(city, countryCode)} 
        onClick={() => eventOnClickCity(city, countryCode)}
        >
            <Grid container
                justifyContent="center"
                alignItems="center" 
            >
                <Grid item md={9} xs={12} >
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={3} xs={12} >
                    <Weather temperature={weather && weather.temperature} state={weather && weather.state} /> 
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {

    const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            // console.log(process.env.REACT_APP_API_KEY)
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&limit=1&appid=${process.env.REACT_APP_API_KEY}`

            try {
                const res = await axios.get(url)
                const { data } = res

                const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0)) 
                const state = data.weather[0].main.toString().toLowerCase()
                const propName = getCityCode(city, countryCode)
                const propValue = { temperature, state }

                setAllWeather(allWeather => (
                    { ...allWeather, [propName]: propValue }
                ))
            
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

        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        })
    
    }, [cities]);
    
  return (
    <div>
        {
            error && <Alert severity="error" onClose={() => setError(null)}> {error} </Alert>
        }
        <List>
        {
            cities.map(cityAndCountry => 
                renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
        }
        </List>
    </div>
  );
};

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList;
