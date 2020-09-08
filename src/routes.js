import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  Navbar,
  Footer,
} from './components';

import {
  Main,
} from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>

        <Route path="/movies" exact component={ Main }/>
      </Switch>

      <Navbar />

      <Footer />
    </BrowserRouter>
  );
}
