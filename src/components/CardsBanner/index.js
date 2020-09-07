import React, { useState, useEffect } from 'react';

import moment from 'moment';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import logo from '../../assets/logo.png';

import 'react-awesome-slider/dist/styles.css';
import './styles.css';
import './styles.scss';

export function CardsBanner({ trendings, genres }) {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const startupScreen = (
    <div className="card-banner card-banner-logo">
      <img
        className="logo-banner"
        src={ logo }
      />
    </div>
  );

  function getGenresById( id ) {
    const genre = genres.find( genre => {
      return genre.id === id
    });

    return genre.name;
  };

  return (
    <AutoplaySlider
      startupScreen={startupScreen}
      className="slider slider-scss"
      bullets={ false }
      // organicArrows={ false }
      play={ true }
      interval={ 8000 }
    >
      {
        trendings.map( trending =>
          <div
            key={ trending.id }
            className="card-banner"
            style={{
              backgroundImage: "url(" + `http://image.tmdb.org/t/p/w1280${ trending.backdrop_path }` + ")",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="card-banner-blur">
              <div className="movie">
                <img
                  className="movie-poster img-not-drag"
                  src={`http://image.tmdb.org/t/p/w1280${ trending.poster_path }`}
                  alt={ trending.title }
                />

                <div className="movie-info">
                  <span className="movie-title">{ trending.title }</span>

                  <span className="movie-subtitle">{ trending.original_title }</span>

                  <div className="movie-genres">
                    {
                      trending.genre_ids.map(( id, index ) => (
                        <>
                          <span className="genre">{ getGenresById( id )}</span>

                          <span className="genre-separetor">{`${ index < trending.genre_ids.length - 1 ? '|' : ''}`}</span>
                        </>
                      ))
                    }
                  </div>

                  <span className="release-date">{ moment( trending.release_date ).format('ll')}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </AutoplaySlider>
  );
};
