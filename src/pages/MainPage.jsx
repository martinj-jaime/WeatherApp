import React from 'react';
import { useNavigate } from 'react-router-dom'

import { getCities } from '../utils/serviceCities'

// Styles
import Paper from '@material-ui/core/Paper'

// IMPORTS
import CityList from './../components/CityList/CityList'
import AppFrame from './../components/AppFrame/AppFrame'

const MainPage = () => {
  const navigate = useNavigate()

  const onClickHandler = React.useCallback((city, countryCode) => {    
    navigate(`/city/${countryCode}/${city}`)
  }, [navigate])

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={getCities()} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
    );
};

export default MainPage;
