import React from 'react';
import {Provider} from 'react-redux';
import AddTodo from './component/AddTodo/addTodo';
import TodoList from './component/Todo/TodoList';
import { store } from './store/store';
import './style.css';

function App_Todo(){
   return(
      <Provider store={store}>
         <div className='App'>
            <h1 className='header'>RTK Todo List</h1>
            <AddTodo />
            <TodoList />
         </div>
      </Provider>
   )
}

export default App_Todo;