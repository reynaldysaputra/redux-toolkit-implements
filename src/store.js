import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './01_basicCounter/reducerCounter';
import { CounterUpdateApp, SelectedTodoSlice, TodosReducer } from './02_todoRedux/reducer';
import postReducer from './02_todoRedux/reducerApi';
import { TodoReducer2 } from './03_todoRedux(createEntityAdapter)/store/todoSlice';

export const store = configureStore({
   reducer : {
      counterReducer : counterReducer.reducer,
      todo : TodosReducer.reducer,
      select : SelectedTodoSlice.reducer,
      counterApp : CounterUpdateApp.reducer,
      post : postReducer.reducer,
      todoReducerAdaptor : TodoReducer2.reducer
   }
})