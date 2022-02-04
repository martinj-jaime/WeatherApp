import React from 'react';
import { render } from '@testing-library/react'
import { CityInfo } from './CityInfo' // SUT: Subject under testing

test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act

    const { findAllByRole } = render(
        <CityInfo city={"Mar del Plata"} country={"Argentina"} ></CityInfo>
    )
    // Assert
    const cityAndCountryComponents = await findAllByRole("heading")

    expect(cityAndCountryComponents[0]).toHaveTextContent("Mar del Plata")
    expect(cityAndCountryComponents[1]).toHaveTextContent("Argentina")
})