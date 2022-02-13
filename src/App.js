import React, { useState, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { WelcomePage, MainPage, CityPage, NotFoundPage } from './pages/index'

function App() {
  const [allWeather, setAllWeather] = useState({});

  const onSetAllWeather = useCallback(weatherCity => {
    setAllWeather(allWeather => ({ ...allWeather, ...weatherCity }))
  }, [setAllWeather])

  const actions = useMemo(() => (
    {
    onSetAllWeather: onSetAllWeather
    }
  ), [onSetAllWeather])

  const data = useMemo(() => (
    {
      allWeather
    }
  ), [allWeather])

  return (
      <Router>

        <Switch>
          <Route exact path='/'>
            <WelcomePage />
          </Route>

          <Route path='/main'>
            <MainPage data={data} actions={actions} />
          </Route>

          <Route path='/city/:countryCode/:city'>
            <CityPage data={data} actions={actions} />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      
      </Router>
  );
}

export default App;
