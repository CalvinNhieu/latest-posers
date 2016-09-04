import React, { Component } from 'react';

import { APP_NAME } from '../constants';
import styles from './styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={ styles.sticky_header }>
        <p className={ styles.header_title }> { APP_NAME } </p>
        <div className={ styles.privacy_policy }>
          <a href="//www.iubenda.com/privacy-policy/7788950" className="iubenda-black iubenda-embed" title="Privacy Policy">Policy</a>
        </div>
      </div>
    );
  }
}
