import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">Stock Note</Link>
        <ul className="right">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/buysell">Buy & Sell Records</NavLink>
          </li>
          <li>
            <NavLink to="/chipviz">Chip Viz</NavLink>
          </li>
          <li>
            <NavLink to="/chipvizbyprice">Chip Viz By Price</NavLink>
          </li>
          <li>
            <NavLink to="/chart">Chart</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);