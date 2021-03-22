import {configureStore} from '@reduxjs/toolkit'
import { TodosReducer, SelectedTodoSlice, CounterUpdateApp } from './reducer'
import { postReducer } from './reducerApi'

export const store = configureStore({
   reducer : {
      todo : TodosReducer.reducer,
      select : SelectedTodoSlice.reducer,
      counterApp : CounterUpdateApp.reducer,
      post : postReducer.reducer,
   },
   devTools : true
})