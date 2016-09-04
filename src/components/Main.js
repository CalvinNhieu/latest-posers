import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'Header';
import Splash from 'Splash';
import PhotoGrid from 'PhotoGrid';
import styles from './styles/main.css';
import { retrieveAuthToken } from '../actionCreators';

class Main extends Component {
  constructor(props) {
    super(props);
    this.props.retrieveAuthToken();
  }

  render() {
    let view;

    if (this.props.accessToken) {
      view = (
        <div className={ styles.main }>
          <Header />
          <PhotoGrid authorized={this.props.accessToken}/>
        </div>
      );
    } else {
      view = (
        <div className={ styles.main }>
          <Splash/>
        </div>
      );
    }

    return view;
  }

}

export default connect(
  (state) => {
    return {
      accessToken: state.accessToken,
    };
  },
  (dispatch) => {
    return {
      retrieveAuthToken: () => {
        return dispatch(retrieveAuthToken());
      },
    };
  },
)(Main);
