

export const getWeatherUrl = ({ city, countryCode }) => (
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
)

export const getForecastUrl = ({ city, countryCode }) => (
    `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
)
