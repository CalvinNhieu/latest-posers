import {createStore} from 'redux';

function reducer(state = [], action) {
  switch (action.type) {
  case 'LOADED':
    return action.data;
  default:
    return [];
  }
}

let store = createStore(reducer);

window.__store__ = store;
export default store;

export { connect } from 'react-redux';
