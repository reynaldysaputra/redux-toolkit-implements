import { configureStore } from '@reduxjs/toolkit';
import { TodoReducer2 } from './todoSlice';

export const store = configureStore({
   reducer : {
      todoReducer : TodoReducer2.reducer
   },
})