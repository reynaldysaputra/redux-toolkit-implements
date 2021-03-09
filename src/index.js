import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './01_basicCounter/counter';
import store from './01_basicCounter/store';

ReactDOM.render(
  <Provider store={store}>
    <Counter/>
  </Provider>,
  document.getElementById('root')
);
