import React from 'react';
import { render } from '@testing-library/react';
import CityList from './CityList';

const cities = [
    { city: "Mar del Plata", country: "Argentina" },
    { city: "Sao Pablo", country: "Brasil" },
    { city: "Barcelona", country: "Spain" },
    { city: "Ciudad de Mexico", country: "Mexico" }
]

test("CityList Render", async () => {
    const { findAllByRole } = render(<CityList cities={cities}/>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
})
