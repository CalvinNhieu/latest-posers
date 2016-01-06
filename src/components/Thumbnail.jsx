import React from 'react';
import Component from 'Component';
import styles from './styles/Thumbnail.css';

export default class Thumbnail extends Component {

  static propTypes = {
    imgSrc: React.PropTypes.string
  }

  render() {
    return (
      <div className={ styles.thumbnail }></div>
    );
  }
}
