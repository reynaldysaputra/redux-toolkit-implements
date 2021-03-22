import { configureStore } from '@reduxjs/toolkit';
import { TodoReducer2 } from './todoSlice';

export const storeTodoAdapter = configureStore({
   reducer : {
      todoReducerAdaptor : TodoReducer2.reducer
   }
})