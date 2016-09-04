import {
  RETRIEVE_AUTH_TOKEN_SUCCESS,
  RETRIEVE_AUTH_TOKEN_FAIL,
  FETCH_IMAGE_DATA_SUCCESS,
  FETCH_IMAGE_DATA_FAIL,
} from './actionTypes';

export function fetchImageDataSuccess(media) {
  return {
    type: FETCH_IMAGE_DATA_SUCCESS,
    media: media,
  };
}

export function fetchImageDataFail() {
  return {
    type: FETCH_IMAGE_DATA_FAIL
  };
}
export function fetchImageData() {
  return function(dispatch, getState) {
    let state = getState();

    let url = 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + state.accessToken;
    fetch(url, {mode: 'cors'})
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(fetchImageDataSuccess(json.data));
      })
      .catch((err) => {
        dispatch(fetchImageDataFail(err));
      });
  };
}

export function retrieveAuthTokenSuccess(accessToken) {
  return {
    type: RETRIEVE_AUTH_TOKEN_SUCCESS,
    accessToken: accessToken,
  };
}
export function retrieveAuthTokenFail() {
  return {
    type: RETRIEVE_AUTH_TOKEN_FAIL,
  };
}
export function retrieveAuthToken() {
  return function(dispatch) {
    let currUrl = window.location.hash;
    let tokenIdentifier = 'access_token=';

    if (currUrl.indexOf(tokenIdentifier) >= 0) {
      let tokenIndex = currUrl.indexOf(tokenIdentifier) + tokenIdentifier.length;
      let token = currUrl.substring(tokenIndex, currUrl.indexOf('?'));

      dispatch(retrieveAuthTokenSuccess(token));
      dispatch(fetchImageData());
    }

    dispatch(retrieveAuthTokenFail());
  };
}
