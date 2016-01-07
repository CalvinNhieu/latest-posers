import React from 'react';
import Component from 'Component';

export default class Auth extends Component {
  render() {
    return (
      <div>
        <a
          href="https://api.instagram.com/oauth/authorize/?client_id=950c6e60f1b24a458f581bcb088e7358&redirect_uri=http://localhost:8080/&response_type=code"
          >Authenticate with Instagram</a>
      </div>
    );
  }
}
