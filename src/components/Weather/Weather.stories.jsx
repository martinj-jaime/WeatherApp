import React from 'react';
import 'typeface-roboto'
import Weather from './Weather';

export default {
    title: "Weather",
    component: Weather,
}

export const WeatherCloud = () => (<Weather temperature={10} state={"clouds"} />);

export const WeatherCloudy = () => (<Weather temperature={15} state={"clouds"} />);