import React from 'react';
import 'typeface-roboto'
import CityInfo from './CityInfo';

export default {
    title: "CityInfo",
    component: CityInfo
}

const CityExample = () => ( <CityInfo city={"Mar del Plata"} country={"Argentina"} ></CityInfo> )

export default CityExample;