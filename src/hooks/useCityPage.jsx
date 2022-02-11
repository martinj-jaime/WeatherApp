import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { getForecastUrl } from '../utils/apiUrls'

import getChartData from '../utils/transforms/getChartData';
import getForecastItemList from '../utils/transforms/getForecastItemList';

const useCityPage = () => {
    const [chartData,setChartData] = useState(null)
    const [forecastItemList,setForecastItemList] = useState(null)
    const [error, setError] = useState(null);
  
    const { city, countryCode } = useParams()
  
    useEffect(() => {
      const getForecast = async () => {
        const url = getForecastUrl({city,countryCode})
        try {
          const { data } = await axios.get(url)
  
          // ForecastChart DATA //
          const dataAux = getChartData({ data })
          setChartData(dataAux)

          // Forecast DATA //
          const forecastItemListAux = getForecastItemList({ data })
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
  
    return { city, countryCode, chartData, forecastItemList, error, setError }
}

export default useCityPage