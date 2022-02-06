import React from 'react';
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      not found
      <div>
          <Link to="/main">
            Back to main
          </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
