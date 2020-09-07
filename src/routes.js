import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  Navbar
} from './components';

import {
  Main,
} from './pages';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/">
            <Redirect to="/movies" exact component={ Main } />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
