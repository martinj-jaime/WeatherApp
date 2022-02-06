import React from 'react';
import 'typeface-roboto'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    {weekDay: 'Lunes', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Martes', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Miercoles', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Jueves', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Viernes', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Sabado', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Domingo', hour: 12, state:'sunny', temperature:18}
]

export const ForecastExample = () => (
    <Forecast forecastItemList={forecastItemList} />
)