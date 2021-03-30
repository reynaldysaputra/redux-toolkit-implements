import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const formAdapter = createEntityAdapter();

const myDynamicFormSlice = createSlice({
   name : 'myDynamicForm',
   initialState : {},
   reducers : {

   }
})

export default myDynamicFormSlice;
