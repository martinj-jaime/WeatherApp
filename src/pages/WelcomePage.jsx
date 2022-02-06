import React from 'react';
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div>
        Welcome Page
        <div>
          <Link to='/main' >
            go to main
          </Link>
        </div>
    </div>
    );
};

export default WelcomePage;
