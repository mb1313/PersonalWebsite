import React from 'react';
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/resume">Resume</Link></li>
        <li><div><Link to="/">Mark Browne</Link></div></li>
        <li><Link to="/side-projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;