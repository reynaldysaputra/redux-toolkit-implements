import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './01_basicCounter/counter';
import App from './02_todoRedux/App';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import App2 from './02_todoRedux/App2';
import App_Todo from './03_todoRedux(createEntityAdapter)/app';
import { store } from './store';
import User from './04_normalisasiRedux/user';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavLink to='/' exact>Home</NavLink>
      <NavLink to='/apptodo'>App Todo CreatEntityAdapter</NavLink>
      <NavLink to='/normalisasiapp'>Normalisasi App</NavLink>

      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/apptodo' component={App_Todo} />
        <Route path='/normalisasiapp' component={User} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
