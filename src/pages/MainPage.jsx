import React from 'react';
import { useHistory } from 'react-router-dom'

import { getCities } from '../utils/serviceCities'

// Styles
import Paper from '@material-ui/core/Paper'

// IMPORTS
import CityList from './../components/CityList/CityList'
import AppFrame from './../components/AppFrame/AppFrame'

const MainPage = () => {
  const history = useHistory()

  const onClickHandler = React.useCallback((city, countryCode) => {    
    history.push(`/city/${countryCode}/${city}`)
  }, [history])

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={getCities()} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
    );
};

export default MainPage;
