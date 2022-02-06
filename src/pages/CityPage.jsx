import React from 'react';
import { Link } from 'react-router-dom'

const CityPage = () => {
  return (
    <div>
        City Page
        <div>
            <Link to='/main' >
              back to main
            </Link>
        </div>
    </div>
    );
};

export default CityPage;
