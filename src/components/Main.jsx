import React from 'react';
import Component from 'Component';
import { Provider } from 'react-redux';
import Store from 'Store';
import Header from 'Header.jsx';
import PhotoGrid from 'PhotoGrid.jsx';
import getURLParameter from 'utils/helper';

export default class Main extends Component {

  constructor(props) {
    super(props);
    let accessToken = getURLParameter('access_token');
    if (accessToken) {
      this.accessToken = accessToken;
      this.fetchPoserData();
    }
  }

  fetchPoserData() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', encodeURI('https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + this.accessToken));
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
      }
    };
    xhr.send();
  }

  render() {
    return (
      <Provider store={Store}>
        <div>
          <Header title="Latest Posers"/>
          <PhotoGrid/>
        </div>
      </Provider>
    );
  }

}
