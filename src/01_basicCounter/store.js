import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducerCounter';

export default configureStore({
   reducer : {
      counterReducer : counterReducer.reducer
   }
})