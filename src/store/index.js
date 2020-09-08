import React, { createContext, useContext } from 'react';

import useMovie from './hooks/search';

export const store = createContext({
  movies: { data: [], clearSearch: () => {}, searchMovies: async () => {
    return true;
  }},
});

const { Provider } = store;

export function StateProvider({ children }) {
  const movies = useMovie();

  return (
    <Provider
      value={{
        movies,
      }}
    >
      {children}
    </Provider>
  );
};

export const useStore = () => useContext(store);
