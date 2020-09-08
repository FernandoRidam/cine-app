import React, { useState, useEffect } from 'react';

import {
  CardMovie,
} from '../CardMovie';

import './styles.css';

export function GenreRow({ name, movies }) {
  const [ more, setMore ] = useState(false);

  return (
    <div className="popularity">
      <span className="genre">{ name }</span>

      <ul className={ more ? 'list open' : 'list' }>
        {
          more
            ? movies.slice( 0, 10 ).map( movie => <CardMovie key={ movie.id } movie={ movie } />)
            : movies.slice( 0, 5 ).map( movie => <CardMovie key={ movie.id } movie={ movie } />)
        }
      </ul>

      {
        movies.length > 5
          ? <span
              className="more"
              onClick={() => setMore( !more )}
            >
              {
                more
                  ? 'Ver Menos'
                  : 'Ver Mais'
              }
            </span>
          : <></>
      }
    </div>
  );
};
