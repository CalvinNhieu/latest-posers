import React from 'react';
import Component from 'Component';
import { Provider } from 'react-redux';
import Store from 'Store';
import Header from 'Header.jsx';
import PhotoGrid from 'PhotoGrid.jsx';
import styles from './styles/main.css';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.accessToken = this.retrieveAccessTokenFromUrl();
    this.media = {};
    this.pagination = {};
    console.log(this.accessToken);
    if (this.accessToken) {
      console.log('Authorized.');
      this.fetchData();
    } else {
      // Render link to client-side implicit ig auth
      console.log('Not authorized.');
    }
  }

  retrieveAccessTokenFromUrl() {
    let urlFragment = window.location.hash;
    let tokenIdentifier = 'access_token=';

    if (urlFragment.indexOf(tokenIdentifier) >= 0) {
      let tokenIndex = urlFragment.indexOf(tokenIdentifier) + tokenIdentifier.length;
      return urlFragment.substring(tokenIndex, urlFragment.indexOf('?'));
    }
    return null;
  }

  fetchData() {
    let xhr = new XMLHttpRequest();
    let data = 'access_token=' + this.accessToken;
    xhr.open('POST', encodeURI('http://server.kambashi.com:3000/fetch'));
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log('fetched data');
        this.media = JSON.parse(xhr.responseText).data;
        Store.dispatch({
          type: 'LOADED',
          data: JSON.parse(xhr.responseText).data
        });
        this.pagination = JSON.parse(xhr.responseText).pagination;
      }
    };
    xhr.send(data);
  }

  render() {
    return (
      <Provider store={Store}>
        <div className={ styles.main }>
          <Header title="Latest Posers"/>
          <PhotoGrid authorized={this.accessToken}/>
          <a href="https://api.instagram.com/oauth/authorize/?client_id=950c6e60f1b24a458f581bcb088e7358&redirect_uri=http://localhost:8080&response_type=token&scope=public_content">Authorize</a>
        </div>
      </Provider>
    );
  }

}
