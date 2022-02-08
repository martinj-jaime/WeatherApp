import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { WelcomePage, MainPage, CityPage, NotFoundPage } from './pages/index'

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
