import React from 'react';
import Component from 'Component';
import _ from 'lodash';
import styles from './styles/thumbnail.css';

export default class Thumbnail extends Component {

  static propTypes = {
    imgSrc: React.PropTypes.string,
    filter: React.PropTypes.string,
    user: React.PropTypes.string,
    redirect: React.PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    _.each(document.getElementsByClassName(styles.overlay), function(element) {
      element.addEventListener('mouseover', function() {
        element.style.opacity = 0.7;
      });
      element.addEventListener('mouseout', function() {
        element.style.opacity = 0;
      });
    });
  }

  handleClick() {
    window.open(this.props.redirect, '_blank');
  }

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.overlay } onClick={ this.handleClick.bind(this) } >
          <p className={ styles.label }> { this.props.filter.toUpperCase() }<br/><br/>{ this.props.user.toUpperCase() } </p>
        </div>
        <img className={ styles.image } src={ this.props.imgSrc } alt=""/>
      </div>
    );
  }
}
