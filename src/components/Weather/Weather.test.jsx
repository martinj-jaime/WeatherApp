import React from 'react';
import Weather from './Weather';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test("Weather Render Cloud", async () => {
    // AAA
    const { findByRole } = render(<Weather temperature={10} state={"cloud"} />)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent(10)
})

test("Weather Render Sunny", async () => {
    // AAA
    const { findByRole } = render(<Weather temperature={21} state={"sunny"} />)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent(21)
})

