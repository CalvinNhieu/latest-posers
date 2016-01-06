import React from 'react';
import { Provider } from 'react-redux';
import Store from 'Store';
import Header from 'Header.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Header title="Latest Posers"/>
        </div>
      </Provider>
    );
  }
}
