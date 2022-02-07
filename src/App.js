import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { WelcomePage, MainPage, CityPage, NotFoundPage } from './pages/index'
import { Grid } from '@material-ui/core'

function App() {
  return (
    <Grid container
      justifyContent="center"
      direction="row"
    >
      <Grid item 
      xs={12}
      sm={11}
      md={10}
      lg={8}
      >
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
      </Grid>
    </Grid>
  );
}

export default App;
