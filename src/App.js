import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { WelcomePage, MainPage, CityPage, NotFoundPage } from './pages/index'

import { WeatherContext } from './WeatherContext'

function App() {
  return (
    <>
      <WeatherContext>

          <Router>

            <Switch>
              <Route exact path='/'>
                <WelcomePage />
              </Route>

              <Route path='/main'>
                <MainPage />
              </Route>

              <Route path='/city/:countryCode/:city'>
                <CityPage />
              </Route>

              <Route>
                <NotFoundPage />
              </Route>
            </Switch>

          </Router>

      </WeatherContext>
    </>
  );
}

export default App;
