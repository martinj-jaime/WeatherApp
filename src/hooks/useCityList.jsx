import { useEffect, useState } from 'react';
import axios from 'axios'

import { getWeatherUrl } from '../utils/apiUrls'
import getAllWeather from '../utils/transforms/getAllWeather';

const useCityList = (cities, onSetAllWeather) => {

    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city,countryCode})
            try {
                const res = await axios.get(url)

                const allWeatherAux = getAllWeather({res,city,countryCode})
                // setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
                onSetAllWeather(allWeatherAux)
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
    
    }, [cities, onSetAllWeather]);

    return { error, setError }
}

export default useCityList;