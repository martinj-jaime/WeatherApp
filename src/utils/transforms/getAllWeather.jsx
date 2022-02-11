
import { getCityCode, toCelcius } from '../utils'
import { validValues } from '../../components/IconState/IconState'

const getAllWeather = ({ res, city, countryCode }) => {
    const { data } = res

    const temperature = toCelcius(data.main.temp) 

    const stateFromServer = data.weather[0].main.toString().toLowerCase()
    const state = validValues.includes(stateFromServer) ? stateFromServer : null

    const propName = getCityCode(city, countryCode)
    const propValue = { temperature, state }

    return ({ [propName]: propValue })
}

export default getAllWeather