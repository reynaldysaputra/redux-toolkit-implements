import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const TodosReducer = createSlice({
   name : 'todo',
   initialState : {
      data : [],
      selectItem : null
   },
   reducers : {
      addTodo : {
         reducer : (state, action) => {
            state.data.push(action.payload);
         },
         prepare: (data) => ({
            payload : {
               id : uuidv4(),
               description : data,
               isComplete : false
            }
         })
      },
      toggleTodo : (state, action) => {
         const findItem = state.data.find(item => item.id === action.payload);
         findItem.isComplete = !findItem.isComplete;
      },
      editTodo : (state, action) => {
         const findItem = state.data.find(item => item.id === action.payload.id);
         findItem.description = action.payload.description;
      },
      deleteTodo : (state, action) => {
         const findIndex = state.data.findIndex(item => item.description === action.payload);
         console.log(findIndex);
         state.data.splice(findIndex, 1);
      }
   }
})

export const SelectedTodoSlice = createSlice({
   name: "selectedTodo",
   initialState: null,
   reducers: {
      select: (state, action) => action.payload
   }
});

export const CounterUpdateApp = createSlice({
   name : 'counterUpdate',
   initialState : 0,
   reducers : {},
   extraReducers : {
      [TodosReducer.actions.addTodo] : state => state + 1,
      [TodosReducer.actions.toggleTodo] : state => state + 1,
      [TodosReducer.actions.editTodo] : state => state + 1,
      [TodosReducer.actions.deleteTodo] : state => state + 1,
   }
})

export const {
   addTodo : createTodoActionCreator, 
   toggleTodo : ToggleTodoActionCreator,
   editTodo : EditTodoActionCreator,
   deleteTodo : DeleteTodoActionCreateor
} = TodosReducer.actions;

export const { select: SelectedTodoActionCreator } = SelectedTodoSlice.actions;