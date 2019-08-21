import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavBar = props => (
  //   setTimeout(() => {
  //     props.history.push('/contact');
  //   }, 5000);
  //   console.log(props);
  <nav className="nav-wrapper red darken -3">
    <div className="container">
      <a className="brand-logo">New Cross</a>
      <ul className="right">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/form">Form</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
export default withRouter(NavBar);
