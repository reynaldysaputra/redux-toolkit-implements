import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './01_basicCounter/counter';
import store from './01_basicCounter/store';
import {store as storeTodo} from './02_todoRedux/store';
import App from './02_todoRedux/App';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import App2 from './02_todoRedux/App2';
import App_Todo from './03_todoRedux(createEntityAdapter)/app';

ReactDOM.render(
  <Provider store={storeTodo}>
    <BrowserRouter>
      <NavLink to='/' exact>Home</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      <NavLink to='/apptodo'>App Todo CreatEntityAdapter</NavLink>

      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/about' component={App2} />
        <Route path='/apptodo' component={App_Todo} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
