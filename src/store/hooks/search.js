import { useState, useCallback, useMemo } from 'react';

import {
  search,
} from '../../services';

export default function useMovies() {
  const [ data, setData ] = useState([]);

  const searchMovies = useCallback( async ( query ) => {
    try {
      const movies = await search( query );

      setData( movies );

      return true;
    } catch ( error ) {
      return false;
    }
  }, []);

  const clearSearch = (() => {
    setData([]);
  })

  return useMemo(() => ({
    data,
    searchMovies,
    clearSearch,
  }), [ data, searchMovies, clearSearch ]);
};
