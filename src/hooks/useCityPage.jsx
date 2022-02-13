import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { getForecastUrl } from '../utils/apiUrls'
import { getCityCode } from '../utils/utils'

import getChartData from '../utils/transforms/getChartData';
import getForecastItemList from '../utils/transforms/getForecastItemList';

const useCityPage = (allChartData, allForecastItemList, actions) => {

    const [error, setError] = useState(null);
    const { city, countryCode } = useParams()
  
    useEffect(() => {
      const getForecast = async () => {
        const cityCode = getCityCode(city,countryCode)

        const url = getForecastUrl({city,countryCode})
        try {
          const { data } = await axios.get(url)

          // ForecastChart DATA //
          const dataAux = getChartData({ data })
          //onSetChartData({ [cityCode]: dataAux })
          actions({ type: 'SET_CHART_DATA', payload: {[cityCode]: dataAux} })

          // Forecast DATA //
          const forecastItemListAux = getForecastItemList({ data })
          //onSetForecastItemList({ [cityCode]: forecastItemListAux })
          actions({ type: 'SET_FORECAST_ITEM_LIST', payload: {[cityCode]: forecastItemListAux} })
  
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

      const cityCode = getCityCode(city,countryCode)

      if (allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
        getForecast()
      }

    }, [city,countryCode,allChartData,allForecastItemList,actions])
  
    return { city, countryCode, error, setError }
}

export default useCityPage