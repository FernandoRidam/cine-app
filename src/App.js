import React from 'react';

import moment from 'moment';
import br from 'moment/locale/pt-br';

import Routes from './routes';

export default function App() {
  // const userLang = navigator.language || navigator.userLanguage;
  // moment.updateLocale( userLang );

  return (
    <Routes />
  );
};
