import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import Auth from 'Auth.jsx';
import Main from 'Main.jsx';

const reactHost = global.document.createElement('span');
global.document.body.appendChild(reactHost);

render((
  <Router>
    <Route path="/auth" component={Auth}/>
    <Route path="/" component={Main}/>
  </Router>
), reactHost);
