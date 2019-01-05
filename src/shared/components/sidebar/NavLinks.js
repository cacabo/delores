import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="links">
    <Link to="/">Home</Link>
    <Link to="/app">App</Link>
    <a href="/">Login</a>
    <a href="/">Register</a>
  </div>
);
