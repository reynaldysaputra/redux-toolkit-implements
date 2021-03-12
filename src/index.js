import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './01_basicCounter/counter';
import store from './01_basicCounter/store';
import {store as storeTodo} from './02_todoRedux/store';
import App from './02_todoRedux/App';

ReactDOM.render(
  <Provider store={storeTodo}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
