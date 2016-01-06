import React from 'react';
import Component from 'Component';

import styles from './styles/Header.css';

export default class Header extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className={ styles.sticky_header }>
        <p className={ styles.header_title }> { this.props.title } </p>
      </div>
    );
  }
}
