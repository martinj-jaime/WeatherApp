import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

test("CityList click on item", async () => {
    // function simulator
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("listitem")

    // Events simulator
    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
