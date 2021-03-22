import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const TodoEntity = createEntityAdapter();

export const TodoReducer2 = createSlice({
   name : 'todoAdapter',
   initialState : TodoEntity.getInitialState(),
   reducers : {
      addTodoSIngle : TodoEntity.addOne,
      addTodoMany : TodoEntity.addMany
   }
})

export const { addTodoSIngle, addTodoMany } = TodoReducer2.actions;