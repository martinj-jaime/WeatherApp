import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { WelcomePage, MainPage, CityPage, NotFoundPage } from './pages/index'

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// ab82a15251067643e2b31f39bea5981f

// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=ab82a15251067643e2b31f39bea5981f

// https://api.openweathermap.org/data/2.5/weather?lat=-34.6075682&lon=-58.4370894&appid=ab82a15251067643e2b31f39bea5981f


// http://api.openweathermap.org/geo/1.0/direct?q=BuenosAires&limit=5&appid=ab82a15251067643e2b31f39bea5981f
// ===
// BuenosAires
// "lat": -34.6075682,
// "lon": -58.4370894,
// "country": "AR"

// &limit={limit}

function App() {
  return (
      <Router>

        <Switch>
          <Route exact path='/'>
            <WelcomePage />
          </Route>

          <Route path='/main'>
            <MainPage />
          </Route>

          <Route path='/city'>
            <CityPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      
      </Router>
  );
}

export default App;
