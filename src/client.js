import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { ensureReady, After } from '@jaredpalmer/after';

import routes from './site/Routes';
import adminroutes from './admin/Routes';
import './App.css';

const allroutes = [...routes, ...adminroutes];
ensureReady(allroutes).then(data => {
  hydrate(
    <BrowserRouter>
      <After data={data} routes={allroutes} />
    </BrowserRouter>,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept();
}
