import React from 'react';
import './Navigation.css';
import classes from './Navigation.css';

import image from './logo.png'
import Avatar from '../Avatar/Avatar'

  const Navbar = () => {
  return (
    <div className={classes.Navbar}>
    <nav className="navbar navbar-expand-lg navbar-light">
    
    <a className="navbar-brand" href="#">
    <div className={classes.Title}>neighbors</div>
    </a>
  

    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">

        {/* Nav Link 1 */}
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <span className={classes.NavLink}> explore </span> 
          </a>
        </li>

        {/* Nav Link 2 */}
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <span className={classes.NavLink}> about </span> 
          </a>
        </li>

      </ul>
</div>
</nav>
</div>

  )
}

export default Navbar;
