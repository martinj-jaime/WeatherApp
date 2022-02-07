import React from 'react';
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    {weekDay: 'Lunes', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Martes', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Miercoles', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Jueves', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Viernes', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Sabado', hour: 12, state:'sunny', temperature:18},
    {weekDay: 'Domingo', hour: 12, state:'sunny', temperature:18}
]

test("Forecast Render", async () => {
    // const { findAllByTextId } = render(<Forecast forecastItemList={forecastItemList} />)

    // const items = await findAllByTextId("forecast-item-container")

    // expect(items).toHaveLength(7)
})