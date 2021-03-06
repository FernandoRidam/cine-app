import React, { useState, useEffect } from 'react';

import moment from 'moment';

import {
  show,
} from '../../services';

import './styles.css';

export function Movie({ match }) {
  const id = match.params.id;

  const [ movie, setMovie ] = useState( null );

  async function getMovie() {
    const data = await show( id );

    console.log( data )
    setMovie( data );
  };

  function getTime( value ) {
    const hours = value / 60;
    const min = value % 60;

    return `${ Math.trunc( hours )}h ${ min }min`
  };

  useEffect(() => {
    getMovie();
  }, [ id ]);

  return (
    <div className="container noselect">
      {
        movie
          ? <>
              <div className="banner banner-show">
                <div
                  key={ movie.id }
                  className="card-banner"
                  style={{
                    backgroundImage: "url(" + `http://image.tmdb.org/t/p/w1280${ movie.backdrop_path }` + ")",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="card-banner-blur">
                    <div className="movie">
                      <img
                        className="movie-poster img-not-drag"
                        src={`http://image.tmdb.org/t/p/w1280${ movie.poster_path }`}
                        alt={ movie.title }
                      />

                      <div className="movie-info">
                        <span className="movie-title">{ movie.title }</span>

                        <span className="movie-subtitle">{ movie.original_title }</span>

                        <div className="movie-genres">
                          {
                            movie.genres.map(( genre, index ) => (
                              <div key={ genre.id }>
                                <span className="genre">{ genre.name }</span>

                                <span className="genre-separetor">{`${ index < movie.genres.length - 1 ? '|' : ''}`}</span>
                              </div>
                            ))
                          }

                          <span className="genre-separetor"> - { getTime( movie.runtime )}</span>
                        </div>

                        <span className="release-date">{ moment( movie.release_date ).format('ll')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="synopsis">
                <span className="synopsis-title">Sinopse</span>

                <span className="synopsis-text">{ movie.overview }</span>
              </div>
            </>
          : <></>
        }
    </div>
  );
};
