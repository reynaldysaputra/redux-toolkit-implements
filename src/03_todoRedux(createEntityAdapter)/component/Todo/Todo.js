import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoSingle, updateTodoSingle } from '../../store/todoSlice';

function Todo(props){
   const dispatch = useDispatch();

   const updateTodo = () => {
      dispatch(updateTodoSingle({
         id : props.data.id,
         changes : {
            complete : !props.data.complete
         }
      }))
   }

   return(
      <div className='todo'>
         <input type='checkbox' value={props.data.complete} checked={props.data.complete} onChange={updateTodo} />
         <span>{props.data.text}</span>
         <button onClick={() => dispatch(deleteTodoSingle(props.data.id))}>Remove</button>
      </div>
   )
}

export default Todo;