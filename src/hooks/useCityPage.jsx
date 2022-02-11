import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/es'

import { getForecastUrl } from '../utils/apiUrls'
import { toCelcius } from '../utils/utils'

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
              max: toCelcius(Math.max(...temps)),
              hasTemps: (temps.length > 0 ? true : false)
            })
          }).filter(item => item.hasTemps)
  
          setChartData(dataAux)
  
          // Forecast DATA //
          const interval = [4,8,12,16,20,24]
          const forecastItemListAux = data.list
          .filter((item, index) => interval.includes(index))
          .map(item => {
            // console.log(item)
            // console.log(item.dt)
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
  
    return { city, countryCode, chartData, forecastItemList, error, setError }
}

export default useCityPage