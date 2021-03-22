import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAll, TodoSelector, restoreData } from '../../store/todoSlice';
import Todo from './Todo';

function TodoList(){
   const dispatch = useDispatch();
   const allTodos = useSelector(TodoSelector.selectAll);
   const trashData = useSelector(state => state.todoReducerAdaptor.junkData);

   return(
      <div className='todo-list'>
         <h3>Your Todos:</h3>
         <h4>Count: 0</h4>
         <button className='delete-btn' onClick={() => dispatch(deleteTodoAll())}>
            Clear All Todos
         </button>
         {allTodos.map(item => (
            <div key={item.id}>
               <Todo data={item} />
            </div>
         ))}
         <h3>Deleted:</h3>
         <div>delete list</div>
         {trashData.map(item => (
            <div className='deleted-todo' key={item.id}>
               <span>{item.text}</span>
               <button onClick={() => dispatch(restoreData(item))}>Restore</button>
            </div>
         ))}
      </div>
   )
}

export default TodoList;