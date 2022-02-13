import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityList from './CityList';

// const cities = [
//     { city: "Mar del Plata", country: "Argentina", countryCode: "AR" },
//     { city: "London", country: "Great Britain", countryCode: "GB" },
//     { city: "Barcelona", country: "Spain", countryCode: "ES" },
//     { city: "Mexico City", country: "Mexico", countryCode: "MX" }
// ]

test("CityList renders", () => {

})

// test("CityList renders", async () => {
//     const { findAllByRole } = render(<CityList cities={cities} allWeather={[""]} onClickCity={() => {}} />)

//     const items = await findAllByRole("button")

//     expect(items).toHaveLength(4)
// })

// test("CityList click on item", async () => {
//     const fnClickOnItem = jest.fn()
//     const { findAllByRole } = render(<CityList cities={cities} allWeather={}  onClickCity={fnClickOnItem} />)

//     const items = await findAllByRole("button")

//     fireEvent.click(items[0])

//     expect(fnClickOnItem).toHaveBeenCalledTimes(1)
// })
 