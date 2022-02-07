import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm } from 'react-icons/wi'

import { IconContext } from 'react-icons'
   
export const validValues = [
        "cloudy",
        "sunny",
        "rain",
        "snow",
        "drizzle",
        "thunderstorm"
    ]

const stateByName = {
    cloudy: WiDayCloudy,
    sunny: WiDaySunny,
    rain: WiRain,
    snow: WiSnow, 
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <IconContext.Provider value={{size: '6em'}} >
            <StateByName />
        </IconContext.Provider>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
}

export default IconState