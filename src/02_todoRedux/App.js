import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodoActionCreator, EditTodoActionCreator, SelectedTodoActionCreator, ToggleTodoActionCreator, DeleteTodoActionCreateor } from './reducer';
import './app.css';

function App(){
   const [desc, setDesc] = useState('');
   const [editMode, setModeEdit] = useState(false);
   const data = useSelector(state => state.todo.data);
   const selectedTodoId = useSelector(state => state.select);
   const selectedTodo = (selectedTodoId && data.find(todo => todo.id === selectedTodoId)) || null;
   const dispatch = useDispatch();
   
   const AddTodoHandle = (e) => {
      e.preventDefault();
      dispatch(createTodoActionCreator(desc));
      e.target.reset();
   }
   
   const handleSelectedTodo = (id) => {
      dispatch(SelectedTodoActionCreator(id));
   }
   
   const handleEdit = () => {
      setModeEdit(true);
      setDesc(selectedTodo.description);
   }

   const handleToggle = (id) => {
      dispatch(ToggleTodoActionCreator(id));
   }

   const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(EditTodoActionCreator({
         id : selectedTodo.id,
         description : desc
      }))
      setDesc('');
      setModeEdit(false);
   }

   const handleDelete = () => {
      dispatch(DeleteTodoActionCreateor(selectedTodo.description));
   }
   
   return(
   <div className="App">
      <div className="App__counter">Todos Updated Count: 0</div>
         <div className="App__header">
            <h1>Todo: Redux vs RTK Edition</h1>
            <form onSubmit={AddTodoHandle}>
               <label htmlFor="new-todo">Add new:</label>
               <input
                  id="new-todo"
                  onChange={(e) => setDesc(e.target.value)}
               />
               <button type="submit">Create</button>
            </form>
         </div>
         <div className="App__body">
            <ul className="App__list">
               {data.length != 0 ? data.map((item,index) => (
                  <li 
                     key={item.id}
                     className={!item.isComplete ? '' : 'done'}
                     onClick={() => handleSelectedTodo(item.id)}
                  >{index+1}.) {item.description}</li>
               )) : 'No note'}
            </ul>
            <div className="App_todo-info">
               <h2>Selected Todo:</h2>
                  {selectedTodo === null ? <p>No selected item</p> :
                     editMode ? (
                        <form onSubmit={handleUpdate}>
                           <label htmlFor="edit-todo">Edit:</label>
                           <input 
                              type='text' 
                              value={desc} 
                              onChange={(e) => setDesc(e.target.value)}
                           />
                           <button type="submit">Update</button>
                           <button>Cancel</button>
                        </form>
                     ) : (
                        <>
                           <span
                              className={`${selectedTodo.isComplete ? 'done' : ''}`}
                           >
                              {selectedTodo.description}
                           </span>

                           <div className="todo-actions">
                              <button onClick={handleEdit}>Edit</button>
                              <button onClick={() => handleToggle(selectedTodo.id)}>Toggle</button>
                              <button onClick={handleDelete}>Delete</button>
                           </div>
                        </>
                     )
                  }
            </div>
         </div>
      </div>
   )
}

export default App;