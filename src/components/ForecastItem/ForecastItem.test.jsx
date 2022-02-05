import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem';

test("ForecastItem Render", async () => {
    // Tarea se deben renderizar los textos
    const { findAllByRole } = render(<ForecastItem weekDay={'Lunes'} hour={10} state={'sunny'} temperature={25} />)

    const result = await findAllByRole("heading")

    expect.anything(result)
})