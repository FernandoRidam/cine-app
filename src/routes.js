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
  Movie,
} from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>

        <Route path="/movies" exact component={ Main }/>
        <Route path="/movies/:id" exact component={ Movie }/>
      </Switch>

      <Navbar />

      <Footer />
    </BrowserRouter>
  );
}
