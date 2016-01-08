import React from 'react';
import Component from 'Component';
import { Provider } from 'react-redux';
import Store from 'Store';
import Header from 'Header.jsx';
import PhotoGrid from 'PhotoGrid.jsx';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.accessToken = this.retrieveAccessTokenFromUrl();
    console.log(this.accessToken);
    if (this.accessToken) {
      console.log('Authorized.');
      this.fetchPoserData();
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
    else {
      return null;
    }
  }

  fetchPoserData() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', encodeURI('https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + this.accessToken));
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
      }
    };
    xhr.send();
  }

  render() {
    return (
      <Provider store={Store}>
        <div>
          <Header title="Latest Posers"/>
          <PhotoGrid/>
          <a href="https://api.instagram.com/oauth/authorize/?client_id=950c6e60f1b24a458f581bcb088e7358&redirect_uri=https://calvinnhieu.github.io/&response_type=token">Authorize</a>
        </div>
      </Provider>
    );
  }

}
