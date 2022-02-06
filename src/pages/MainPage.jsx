import React from 'react';
import { useHistory } from 'react-router-dom'

const MainPage = () => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push('/city')
  }

  return (
    <div>
        Main Page
        <button onClick={onClickHandler} >Ir a city page</button>
    </div>
    );
};

export default MainPage;
