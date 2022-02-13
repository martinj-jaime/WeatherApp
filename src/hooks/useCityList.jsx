import { useEffect, useState } from 'react';
import axios from 'axios'

import { getWeatherUrl } from '../utils/apiUrls'
import { getCityCode } from '../utils/utils'
import getAllWeather from '../utils/transforms/getAllWeather';

const useCityList = (cities, allWeather, actions) => {

    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city,countryCode})
            try {
                // flag
                const propName = getCityCode(city,countryCode)
                //onSetAllWeather({ [propName]: {} })
                actions({ type: 'SET_ALL_WEATHER', payload: {[propName]: {}} })

                const res = await axios.get(url)

                const allWeatherAux = getAllWeather({res,city,countryCode})
                //onSetAllWeather(allWeatherAux)
                actions({ type: 'SET_ALL_WEATHER', payload: allWeatherAux })
                
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
    
    }, [cities, allWeather, actions]);

    return { error, setError }
}

export default useCityList;