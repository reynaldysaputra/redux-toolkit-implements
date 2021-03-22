import { createSlice, createEntityAdapter, current } from '@reduxjs/toolkit';

export const TodoEntity = createEntityAdapter();
export const TodoSelector = TodoEntity.getSelectors(state => state.todoReducerAdaptor);

export const TodoReducer2 = createSlice({
   name : 'todoAdapter',
   initialState : TodoEntity.getInitialState({
      junkData : [] 
   }),
   reducers : {
      addTodoSIngle : TodoEntity.addOne,
      addTodoMany : TodoEntity.addMany,
      updateTodoSingle : TodoEntity.updateOne,
      deleteTodoAll : TodoEntity.removeAll,
      deleteTodoSingle : (state, action) => {
         state.junkData.push(current(state.entities[action.payload]));
         TodoEntity.removeOne(state, action);
      },
      restoreData : (state, action) => {
         TodoEntity.addOne(state, action.payload);
         state.junkData = state.junkData.filter(item => item.id !== action.payload.id);
      }
   }
})

export const { 
   addTodoSIngle, 
   addTodoMany,
   deleteTodoSingle,
   deleteTodoAll,
   updateTodoSingle,
   restoreData
} = TodoReducer2.actions;