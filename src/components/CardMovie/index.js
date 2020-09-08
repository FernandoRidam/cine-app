import React from 'react';

import moment from 'moment';

import './styles.css';

export function CardMovie({ movie }) {
  return (
    <li className="card-movie">
      <div className="cover">
        <img
          className="image"
          src={`http://image.tmdb.org/t/p/w1280${ movie.poster_path }`}
          alt={ movie.title }
        />

        <div className="cover-blur" />

        <div className="movie-card-info">
          <span className="movie-card-title">{ movie.title }</span>

          <span className="movie-card-release-date">{ moment( movie.release_date ).format('ll')}</span>
        </div>
      </div>
    </li>
  );
};
