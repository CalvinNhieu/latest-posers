import {
  RETRIEVE_AUTH_TOKEN_SUCCESS,
  RETRIEVE_AUTH_TOKEN_FAIL,
  FETCH_IMAGE_DATA_SUCCESS,
  FETCH_IMAGE_DATA_FAIL,
} from 'actionTypes';

const initialState = {
  accessToken: '',
  media: [],
};

const reducerMap = {
  [RETRIEVE_AUTH_TOKEN_SUCCESS]: (state, action) => {
    return {
      ...state,
      accessToken: action.accessToken,
    };
  },
  [RETRIEVE_AUTH_TOKEN_FAIL]: (state) => {
    return state;
  },
  [FETCH_IMAGE_DATA_SUCCESS]: (state, action) => {
    return {
      ...state,
      media: action.media,
    };
  },
  [FETCH_IMAGE_DATA_FAIL]: (state) => {
    return state;
  },
};

export default function rootReducer(state = initialState, action) {
  if (reducerMap[action.type]) {
    return reducerMap[action.type](state, action);
  }

  return state;
}
