import React, { Component } from 'react';
import styles from './styles/splash.css';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    let DEV = false;
    let host = 'http://calvinnhieu.github.io/';
    if (DEV) {
      host = 'http://localhost:8080';
    }
    this.auth_url = 'https://api.instagram.com/oauth/authorize/?client_id=950c6e60f1b24a458f581bcb088e7358&redirect_uri=' + host + '&response_type=token&scope=public_content';
  }

  render() {
    return (
      <div className={ styles.bkg }>
        <div className={ styles.wrapper }>
          <a className={ styles.hello } href={ this.auth_url }>Latest Posers</a>
        </div>
      </div>
    );
  }
}
