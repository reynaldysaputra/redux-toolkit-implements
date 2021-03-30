import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const formAdapter = createEntityAdapter();

const myDynamicFormSlice = createSlice({
   name : 'myDynamicForm',
   initialState : {},
   reducers : {
      createForm : (state, {payload : id}) => {
         state[id] = formAdapter.getInitialState({
            loading : false,
            error : false
         })
      },
   }
})

export const { createForm } = myDynamicFormSlice.actions;

export default myDynamicFormSlice;
