import React from 'react';
import Component from 'Component';
import { Provider } from 'react-redux';
import Store from 'Store';
import Header from 'Header.jsx';
import Splash from 'Splash.jsx';
import PhotoGrid from 'PhotoGrid.jsx';
import styles from './styles/main.css';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.accessToken = this.retrieveAccessTokenFromUrl();
    this.media = {};
    this.pagination = {};
    if (this.accessToken) {
      // this.fetchData();
      this.getImageData();
    } else {
      // console.log('Not authorized.');
    }
  }

  getImageData() {
    let url = 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + this.accessToken;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        Store.dispatch({
          type: 'LOADED',
          data: json.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  retrieveAccessTokenFromUrl() {
    let urlFragment = window.location.hash;
    let tokenIdentifier = 'access_token=';

    if (urlFragment.indexOf(tokenIdentifier) >= 0) {
      let tokenIndex = urlFragment.indexOf(tokenIdentifier) + tokenIdentifier.length;
      let token = urlFragment.substring(tokenIndex, urlFragment.indexOf('?'));
      return token;
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
        this.media = JSON.parse(xhr.responseText).data;
        console.log(this.media);
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
    let view;
    if (this.accessToken) {
      view =
      (<Provider store={Store}>
        <div className={ styles.main }>
          <Header title="Latest Posers"/>
          <PhotoGrid authorized={this.accessToken}/>
        </div>
      </Provider>);
    } else {
      view =
      (<Provider store={Store}>
        <div className={ styles.main }>
          <Splash/>
        </div>
      </Provider>);
    }
    return view;
  }

}
