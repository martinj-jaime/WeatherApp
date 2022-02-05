import React from 'react';
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Mar del Plata", country: "Argentina" },
    { city: "Sao Pablo", country: "Brasil" },
    { city: "Barcelona", country: "Spain" },
    { city: "Ciudad de Mexico", country: "Mexico" }
]

export const CityListExample = () => <CityList cities={cities} />