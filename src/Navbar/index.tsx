import * as cx from 'classnames';
import * as React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

interface IState {
  hamburgerOpen: boolean;
}

class Navbar extends React.Component<any, IState> {
  public state: IState = {
    hamburgerOpen: false,
  };

  public handleHamburgerClick = (e: any) => {
    e.preventDefault();
    this.setState({hamburgerOpen: !this.state.hamburgerOpen});
  };

  public render() {
    const {hamburgerOpen} = this.state;
    const hambugerClass = cx('navbar-burger', {'is-active': hamburgerOpen});

    return (
      <nav className="navbar main-nav" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            MealPlanner
          </Link>
          <a
            role="button"
            className={hambugerClass}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.handleHamburgerClick}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link
              className="button is-text navbar-item"
              role="button"
              to="/ingredients">
              Ingredients
            </Link>
            <Link
              className="button is-text navbar-item"
              role="button"
              to="/recipes">
              Recipes
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
