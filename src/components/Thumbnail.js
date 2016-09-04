import React, { Component } from 'react';
import _ from 'lodash';
import styles from './styles/thumbnail.css';

export default class Thumbnail extends Component {

  static propTypes = {
    index: React.PropTypes.number,
    imgSrc: React.PropTypes.string,
    filter: React.PropTypes.string,
    user: React.PropTypes.string,
    redirect: React.PropTypes.string
  }

  constructor(props) {
    super(props);
    this.overlay = null;
  }

  componentDidMount() {
    _.each(document.getElementsByClassName(this.props.index), function(element) {
      this.overlay = element;
    }.bind(this));
  }

  handleClick() {
    window.open(this.props.redirect, '_blank');
  }

  handleMouseOver() {
    this.overlay.style.opacity = 0.7;
  }

  handleMouseOut() {
    this.overlay.style.opacity = 0;
  }

  render() {
    let overlayClass = styles.overlay + ' ' + this.props.index;
    return (
      <div className={ styles.container }>
        <div className={ overlayClass } onClick={ this.handleClick.bind(this) } onMouseOver={ this.handleMouseOver.bind(this) } onMouseOut={ this.handleMouseOut.bind(this) }>
          <p className={ styles.label }> { this.props.filter.toUpperCase() }<br/><br/>{ this.props.user.toUpperCase() } </p>
        </div>
        <img className={ styles.image } src={ this.props.imgSrc } alt=""/>
      </div>
    );
  }
}
