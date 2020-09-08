import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import {
  useStore
} from '../../store';

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
  const [ searchText, setSearchText ] = useState('');

  const { movies } = useStore();

   async function search() {
    if( searchText !== '') {
      await movies.searchMovies( searchText );
    } else {
      movies.clearSearch();
    }
  };

  return (
    <div className="navbar noselect">
      <a href="/">
        <img className="logo img-not-drag" src={ logo } alt="Cine App"/>
      </a>

      <TextField
        value={ searchText }
        change={ event => setSearchText( event.target.value )}
        placeholder="Encontre seus filmes favoritos…"
        icon={ <BiSearchAlt className="search"/> }
        iconFunction={ search }
      />

      <div className="navigation">
        <ul className="navigation-list">
          {
            navbarRoutes.map( route =>
              <Route
                key={ route.path }
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
      className={ verifySelected( route.path ) ? 'route noselect selected' : 'route noselect'}
    >
      <span>{ route.label }</span>
    </li>
  );
});
