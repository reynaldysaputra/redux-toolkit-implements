import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { createForm } from './formSlice';
import { v4 as uuidv4 } from 'uuid';

function MyDynamicForm(){
   const dispatch = useDispatch();

   return(
      <Fragment>
         <br/>
         <button 
            onClick={() => dispatch(createForm(uuidv4()))}
         >Create New Form</button>
      </Fragment>
   )
}

export default MyDynamicForm;