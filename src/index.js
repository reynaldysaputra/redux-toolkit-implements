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
import Blog from './05_deepIntoCreateEntityAdapter/pages/blog';
import MyDynamicForm from './06_dynamicForm/form';
import Ecommerce1 from './TRAINING/01_ecommerce1/app';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavLink to='/' exact>Home</NavLink><br/>
      <NavLink to='/apptodo'>App Todo CreatEntityAdapter</NavLink><br/>
      <NavLink to='/normalisasiapp'>Normalisasi App</NavLink><br/>
      <NavLink to='/deepcreateEntityAdapter'>deep createEntityAdapter</NavLink><br/>
      <NavLink to='/dynamicform'>Dynamic Form</NavLink><br/>
      <NavLink to='/ecommerce1'>Ecommerce 1</NavLink><br/>

      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/apptodo' component={App_Todo} />
        <Route path='/normalisasiapp' component={User} />
        <Route path='/deepcreateEntityAdapter' component={Blog} />
        <Route path='/dynamicform' component={MyDynamicForm} />
        <Route path='/ecommerce1' component={Ecommerce1} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
