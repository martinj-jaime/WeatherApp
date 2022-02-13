import { useEffect, useState } from 'react';
import axios from 'axios'

import { getWeatherUrl } from '../utils/apiUrls'
import { getCityCode } from '../utils/utils'
import getAllWeather from '../utils/transforms/getAllWeather';

const useCityList = (cities, allWeather, onSetAllWeather) => {

    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city,countryCode})
            try {
                // flag
                const propName = getCityCode(city,countryCode)
                onSetAllWeather({ [propName]: {} })

                const res = await axios.get(url)

                const allWeatherAux = getAllWeather({res,city,countryCode})
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
            if(!allWeather[getCityCode(city,countryCode)]) {
                setWeather(city, countryCode)
            }
        })
    
    }, [cities, allWeather, onSetAllWeather]);

    return { error, setError }
}

export default useCityList;