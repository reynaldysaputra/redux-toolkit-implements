import { createEntityAdapter, createSlice, current } from '@reduxjs/toolkit';

const formAdapter = createEntityAdapter({
   selectId : ({id}) => id
});

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
      setDataForm : (state, {payload}) => {
         payload.forEach(item => {
            formAdapter.addOne(state[item.id], item);
         });
      }
   }
})

export const { createForm, setDataForm } = myDynamicFormSlice.actions;
export default myDynamicFormSlice;
