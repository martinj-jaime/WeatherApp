import React from 'react';
import PropTypes from 'prop-types';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiDayRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'

export const validValues = ['cloud','cloudy','fog','sunny','rain']
const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiDayRain
}

const renderState = state => {
    let Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName["sunny"]
    return <Icon />
}

const IconState = ({ state }) => {
  return (
    <>
        <IconContext.Provider value={{size:'5em'}}>
            {renderState(state)}
        </IconContext.Provider>
    </>
  );
};

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
};

export default IconState;
