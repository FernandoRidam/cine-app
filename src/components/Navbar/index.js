import React from 'react';

import { withRouter } from 'react-router-dom';

import {
  navbarRoutes,
} from '../../utils';

import {
  BiSearchAlt,
} from "react-icons/bi";

import {
  TextField,
} from '../../components';

import logo from '../../assets/logo.png';

import './styles.css';

export function Navbar() {
  async function search() {};

  return (
    <div className="navbar">
      <a href="/">
        <img className="logo" src={ logo } alt="Cine App"/>
      </a>

      <TextField
        placeholder="Encontre seus filmes favoritos…"
        icon={ <BiSearchAlt className="search"/> }
        iconFunction={ search }
      />

      <div className="navigation">
        <ul className="navigation-list">
          {
            navbarRoutes.map( route =>
              <Route
                route={ route }
              />
            )
          }
        </ul>
      </div>
    </div>
  );
};

const Route = withRouter(({ route, history }) => {
  function handleNavigation( path ) {
    history.push( path );
  };

  function verifySelected( path ) {
    const { pathname } = window.location;

    return path === pathname;
  };

  return (
    <li
      onClick={() => handleNavigation( route.path )}
      className={ verifySelected( route.path ) ? 'route selected' : 'route'}
    >
      <span>{ route.label }</span>
    </li>
  );
});