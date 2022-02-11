import { useEffect, useState } from 'react';
import axios from 'axios'

import { getWeatherUrl } from '../utils/apiUrls'
import { getCityCode, toCelcius } from '../utils/utils'

const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city,countryCode})
            try {
                const res = await axios.get(url)
                const { data } = res

                const temperature = toCelcius(data.main.temp) 
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

    return { allWeather, error, setError }
}

export default useCityList;