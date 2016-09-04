import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from 'Thumbnail';
import styles from './styles/photo_grid.css';

class PhotoGrid extends Component {
  static propTypes = {
    media: React.PropTypes.array
  }

  render() {
    this.key = 0;
    let thumbnails = this.props.media.map((data) =>
      <Thumbnail index= { this.key } key={ this.key++ } imgSrc={ data.images.standard_resolution.url } filter={ data.filter } user={ data.user.username } redirect={ data.link }/>
    );
    return (
      <div className={ styles.photo_grid }>
        {thumbnails}
      </div>
    );
  }
}

export default connect((state) => ({
  media: state.media
}))(PhotoGrid);
