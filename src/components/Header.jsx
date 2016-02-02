import React from 'react';
import Component from 'Component';

import styles from './styles/header.css';

export default class Header extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className={ styles.sticky_header }>
        <p className={ styles.header_title }> { this.props.title } </p>
        <div className={ styles.privacy_policy }>
          <a href="//www.iubenda.com/privacy-policy/7788950" className="iubenda-black iubenda-embed" title="Privacy Policy">Policy</a>
        </div>
      </div>
    );
  }
}
