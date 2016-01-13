import {createStore} from 'redux';

let placeholder = 'https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/s640x640/sh0.08/e35/12501980_172924093067888_955910836_n.jpg';

function reducer(state = [], action) {
  switch (action.type) {
  case 'LOADED':
    return action.data;
  default:
    return [placeholder, placeholder];
  }
}

let store = createStore(reducer);

window.__store__ = store;
export default store;

export { connect } from 'react-redux';
