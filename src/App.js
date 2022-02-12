import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { WelcomePage, MainPage, CityPage, NotFoundPage } from './pages/index'

function App() {
  const [allWeather, setAllWeather] = useState({});

  const onSetAllWeather = useMemo(() => (weatherCity => {
    setAllWeather(allWeather => ({ ...allWeather, ...weatherCity }))
  }), [setAllWeather])

  return (
      <Router>

        <Switch>
          <Route exact path='/'>
            <WelcomePage />
          </Route>

          <Route path='/main'>
            <MainPage allWeather={allWeather} onSetAllWeather={onSetAllWeather} />
          </Route>

          <Route path='/city/:countryCode/:city'>
            <CityPage allWeather={allWeather} onSetAllWeather={onSetAllWeather} />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      
      </Router>
  );
}

export default App;
