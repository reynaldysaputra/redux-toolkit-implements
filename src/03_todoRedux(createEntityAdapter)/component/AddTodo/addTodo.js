import React from 'react';

function AddTodo(){
   return(
      <div className='add-todo'>
         <p>To add multiple items write them comma separated</p>
         <p><i>eg: Eggs, Bread, Ham, Cheese</i></p>
         <input />
         <button>Add</button>
      </div>
   )
}

export default AddTodo;