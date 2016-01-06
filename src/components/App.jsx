import React from 'react';
import { Provider } from 'react-redux';
import Store from 'Store';
import Header from 'Header.jsx';
import PhotoGrid from 'PhotoGrid.jsx';
import styles from './styles/app.css';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Header title="Latest Posers"/>
          <PhotoGrid/>
        </div>
      </Provider>
    );
  }
}
