import React from 'react';
import {connect} from 'Store';
import Component from 'Component';
import Thumbnail from 'Thumbnail.jsx';
import styles from './styles/photo_grid.css';

class PhotoGrid extends Component {
  static propTypes = {
    imageData: React.PropTypes.array
  }

  // TODO: populate from data
  render() {
    let thumbnails = this.props.imageData.map((data) =>
      <Thumbnail imgSrc={ data.images.standard_resolution.url } filter={ data.filter } user={ data.user.username } redirect={ data.link }/>
    );

    return (
      <div className={ styles.photo_grid }>
        {thumbnails}
      </div>
    );
  }
}

export default connect((state) => ({
  imageData: state
}))(PhotoGrid);
