import React from 'react';
import 'typeface-roboto'
import Weather from './Weather';

export default {
    title: "Weather",
    component: Weather,
}

export const WeatherCloud = () => (<Weather temperature={10} state={"cloud"} />);

export const WeatherCloudy = () => (<Weather temperature={15} state={"cloudy"} />);