import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  public render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            MealPlanner
          </Link>
        </div>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true">Ingredients</span>
          <span aria-hidden="true">Recipes</span>
          <span aria-hidden="true">About</span>
        </a>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link
              className="button is-text navbar-item"
              role="button"
              to="/ingredients"
            >
              Ingredients
            </Link>
            <Link
              className="button is-text navbar-item"
              role="button"
              to="/recipes"
            >
              Recipes
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
