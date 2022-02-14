import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WelcomePage, MainPage, CityPage, NotFoundPage } from './pages/index'

import { WeatherContext } from './WeatherContext'

function App() {
  return (
    <>
      <WeatherContext>

          <Router>
            <Routes>

              <Route path='/' element={<WelcomePage />} />

              <Route path='/main' element={<MainPage />} />

              <Route path='/city/:countryCode/:city' element={<CityPage />} />

              <Route path='*' element={<NotFoundPage />} />

            </Routes>
          </Router>

      </WeatherContext>
    </>
  );
}

export default App;
