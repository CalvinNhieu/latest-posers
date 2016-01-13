import React from 'react';
import Component from 'Component';
import styles from './styles/Thumbnail.css';

export default class Thumbnail extends Component {

  static propTypes = {
    imgSrc: React.PropTypes.object
  }

  render() {
    return (
      <div className={ styles.container }>
        <img className={ styles.image } src={this.props.imgSrc} alt=""/>
      </div>
    );
  }
}
