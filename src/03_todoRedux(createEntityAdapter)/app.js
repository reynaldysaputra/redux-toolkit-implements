import React from 'react';
import {Provider} from 'react-redux';
import AddTodo from './component/AddTodo/addTodo';
import TodoList from './component/Todo/TodoList';
import './style.css';

function App_Todo(){
   return(
      <div className='App'>
         <h1 className='header'>RTK Todo List</h1>
         <AddTodo />
         <TodoList />
      </div>
   )
}

export default App_Todo;