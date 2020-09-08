import React, { useState, useEffect } from 'react';

import FlatList from 'flatlist-react';

import {
  index,
  trending,
  discover,
} from '../../services';

import {
  CardsBanner,
  GenreRow,
} from '../../components';

import './styles.css';

export function Main() {
  const [ trendings, setTrendings ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ discovers, setDiscovers ] = useState([]);

  const [ page, setPage ] = useState(1);
  const [ pages, setPages ] = useState([]);

  async function getTrendings() {
    const trendings = await trending();

    setTrendings( trendings );
  };

  async function getGenres() {
    const genres = await index();

    setGenres( genres );
  };

  async function getDiscovers() {
    const discovers = await discover();
    let moviesByGenre = [];

    genres.forEach( genre => {
      moviesByGenre.push({ genre: genre.name, movies: discovers.filter( movie => {
        return movie.genre_ids.some( id => genre.id === id );
      })});
    });

    setDiscovers( moviesByGenre );
    console.log( moviesByGenre );
  };

  useEffect(() => {
    getGenres();

    getTrendings();
  }, []);

  useEffect(() => {
    if( genres.length > 0 ) {
      getDiscovers();
    }
  }, [ genres ]);

  return (
    <div className="container noselect">
      <CardsBanner
        trendings={ trendings }
        genres={ genres }
      />

      <div className="popular-title">
        <span>Mais Populares</span>
      </div>

      {
        discovers.map(( discover, index ) =>
          discover.movies.length > 0
            ? <GenreRow
                key={ discover }
                name={ discover.genre }
                movies={ discover.movies }
              />
            : <></>
        )
      }
    </div>
  );
};
