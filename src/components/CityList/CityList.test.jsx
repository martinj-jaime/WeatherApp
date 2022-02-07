import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityList from './CityList';

const cities = [
    { city: "Mar del Plata", country: "Argentina" },
    { city: "Sao Pablo", country: "Brasil" },
    { city: "Barcelona", country: "Spain" },
    { city: "Ciudad de Mexico", country: "Mexico" }
]

test("CityList renders", async () => {
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}} />)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {
    const fnClickOnItem = jest.fn()
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
 