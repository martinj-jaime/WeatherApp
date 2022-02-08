import React from 'react';
import { Link } from 'react-router-dom'
import WelcomeScreen from './../components/WelcomeScreen/WelcomeScreen'

const WelcomePage = () => {
  return (
    <WelcomeScreen>
      <div>
        Welcome Page
        <div>
          <Link to='/main' >
            go to main
          </Link>
        </div>
      </div> 
    </WelcomeScreen>
    );
};

export default WelcomePage;
