import React, { useState, useEffect } from 'react';

import {
  useStore
} from '../../store';

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
  const { movies } = useStore();

  const [ trendings, setTrendings ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ discovers, setDiscovers ] = useState([]);
  const [ searchMovies, setSearchMovies ] = useState([]);

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
  };

  async function getSearchMovies( searchMovies ) {
    let moviesByGenre = [];

    genres.forEach( genre => {
      moviesByGenre.push({ genre: genre.name, movies: searchMovies.filter( movie => {
        return movie.genre_ids.some( id => genre.id === id );
      })});
    });

    setSearchMovies( moviesByGenre );
  };

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    getTrendings();
  }, []);

  useEffect(() => {
    if( genres.length > 0 ) {
      getDiscovers();
    }
  }, [ genres ]);

  useEffect(() => {
    if( movies.data.length > 0 ) {
      getSearchMovies( movies.data );
    }
  }, [ movies.data ]);

  return (
    <div className="container noselect">
      <div className={`banner ${ !movies.data.length > 0 ? 'banner-show' : ''}`}>
        <CardsBanner
          trendings={ trendings }
          genres={ genres }
        />
      </div>

      <div className="row-title">
        <span>{ movies.data.length > 0 ? 'Resultado da Busca' : 'Mais Populares'}</span>
      </div>

      {
        movies.data.length > 0
          ? searchMovies.map(( discover, index ) =>
              discover.movies.length > 0
                ? <GenreRow
                    key={ discover.genre }
                    name={ discover.genre }
                    movies={ discover.movies }
                  />
                : <></>
            )
          : discovers.map(( discover, index ) =>
              discover.movies.length > 0
                ? <GenreRow
                    key={ discover.genre }
                    name={ discover.genre }
                    movies={ discover.movies }
                  />
                : <></>
            )
      }
    </div>
  );
};
