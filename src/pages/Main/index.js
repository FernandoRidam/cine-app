import React, { useState, useEffect } from 'react';

import {
  index,
  trending,
} from '../../services';

import {
  CardsBanner,
} from '../../components';

import './styles.css';

export function Main() {
  const [ trendings, setTrendings ] = useState([]);
  const [ genres, setGenres ] = useState([]);

  async function getTrendings() {
    const trendings = await trending();

    setTrendings( trendings );
  };

  async function getGenres() {
    const genres = await index();

    setGenres( genres );
  };

  useEffect(() => {
    getTrendings();

    getGenres();
  }, []);

  return (
    <div className="container noselect">
      <CardsBanner
        trendings={ trendings }
        genres={ genres }
      />
    </div>
  );
};
