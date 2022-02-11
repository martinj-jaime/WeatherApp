
import { getCityCode, toCelcius } from '../utils'
import { validValues } from '../../components/IconState/IconState'

const getAllWeather = ({ res, city, countryCode }) => {
    const { data } = res

    const temperature = toCelcius(data.main.temp) 
    const humidity = data.main.humidity,
          wind = data.wind.speed

    const stateFromServer = data.weather[0].main.toString().toLowerCase()
    const state = validValues.includes(stateFromServer) ? stateFromServer : null

    const propName = getCityCode(city, countryCode)
    const propValue = { temperature, state, humidity, wind }

    return ({ [propName]: propValue })
}

export default getAllWeather