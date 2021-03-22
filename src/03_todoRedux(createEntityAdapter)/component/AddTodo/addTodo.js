import React, { useState } from 'react';
import {nanoid} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodoMany, addTodoSIngle } from '../../store/todoSlice';

function AddTodo(){
   const [text, setText] = useState('');
   const dispatch = useDispatch();
   
   const sendData = (event) => {
      setText(event.target.value);

      const items = text.split(',');

      if(event.key === 'Enter' && items.length === 0) {
         dispatch(addTodoSIngle({
            id : nanoid(),
            text : text,
            message : false
         }))
      }else if(event.key === 'Enter' && items.length >= 0) {
         dispatch(addTodoMany(
            items.map(data => ({
               id : nanoid(),
               text : data,
               message : false
            }))
         ))
      }
   }

   return(
      <div className='add-todo'>
         <p>To add multiple items write them comma separated</p>
         <p><i>eg: Eggs, Bread, Ham, Cheese</i></p>
         <input defaultValue={text} onKeyUp={sendData} />
      </div>
   )
}

export default AddTodo;