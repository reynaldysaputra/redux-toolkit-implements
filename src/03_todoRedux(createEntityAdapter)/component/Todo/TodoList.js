import React from 'react';
import Todo from './Todo';

function TodoList(){
   return(
      <div className='todo-list'>
         <h3>Your Todos:</h3>
         <h4>Count: 0</h4>
         <button className='delete-btn'>
            Clear All Todos
         </button>
         <Todo/>
         <h3>Deleted:</h3>
         <div>delete list</div>
      </div>
   )
}

export default TodoList;