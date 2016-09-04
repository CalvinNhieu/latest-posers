import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';

const reactHost = global.document.createElement('span');
global.document.body.appendChild(reactHost);

render((
  <Router>
    <Route path="/*" component={App}/>
  </Router>
), reactHost);
