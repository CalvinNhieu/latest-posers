import React from 'react';
import Component from 'Component';
import _ from 'lodash';
import styles from './styles/Thumbnail.css';

export default class Thumbnail extends Component {

  static propTypes = {
    imgSrc: React.PropTypes.string,
    filter: React.PropTypes.string,
    user: React.PropTypes.string,
    redirect: React.PropTypes.string
  }

  constructor(props) {
    super(props);
    this.redirect = this.props.redirect;
  }

  componentDidMount() {
    _.each(document.getElementsByClassName(styles.overlay), function(element) {
      element.addEventListener('click', function() {
        window.open(this.redirect, '_blank');
      }.bind(this));
      element.addEventListener('mouseover', function() {
        element.style.opacity = 0.7;
      });
      element.addEventListener('mouseout', function() {
        element.style.opacity = 0;
      });
    }.bind(this));
  }

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.overlay }>
          <p className={ styles.label }> { this.props.filter.toUpperCase() }<br/><br/>{ this.props.user.toUpperCase() } </p>
        </div>
        <img className={ styles.image } src={ this.props.imgSrc } alt=""/>
      </div>
    );
  }
}
