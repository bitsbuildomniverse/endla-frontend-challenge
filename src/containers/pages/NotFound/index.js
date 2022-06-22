import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 align="center">Error 404</h1>
        <h2 align="center">Oops, the drill bit got lost. Return to {<Link to="/">surface</Link>}.</h2>
      </div>
    </div>
  );
};

export default NotFound;
