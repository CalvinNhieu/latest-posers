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
    let igAuthCode = getURLParameter('code');
    this.accessToken = '';
    if (igAuthCode) {
      this.authenticateIg(igAuthCode);
    }
  }

  authenticateIg(code) {
    let xhr = new XMLHttpRequest();
    let data = 'code=' + code;
    xhr.open('POST', encodeURI('http://server.kambashi.com:8080/ig_auth'));
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
        this.accessToken = xhr.responseText;
        this.fetchPoserData();
      }
    };

    xhr.send(data);
  }

  fetchPoserData() {
    let xhr = new XMLHttpRequest();
    let data = 'access_token=' + this.accessToken;

    xhr.open('POST', encodeURI('http://server.kambashi.com:8080/get_nofilter_images'));
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
      }
    };
    xhr.send(data);
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
