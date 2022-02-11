
const cities = [
    { city: "Mar del Plata", country: "Argentina", countryCode: "AR" },
    { city: "London", country: "Great Britain", countryCode: "GB" },
    { city: "Barcelona", country: "Spain", countryCode: "ES" },
    { city: "Mexico City", country: "Mexico", countryCode: "MX" }
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = ({ countryCode }) => (cities.filter(c => c.countryCode === countryCode)[0].country)
