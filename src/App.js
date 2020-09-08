import React from 'react';

import moment from 'moment';
import br from 'moment/locale/pt-br';

import { StateProvider } from './store';

import Routes from './routes';

export default function App() {
  const userLang = navigator.language || navigator.userLanguage;
  moment.updateLocale('pt-br', br );

  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  );
};
