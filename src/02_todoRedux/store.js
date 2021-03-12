import {configureStore} from '@reduxjs/toolkit'
import { TodosReducer, SelectedTodoSlice, CounterUpdateApp } from './reducer'

export const store = configureStore({
   reducer : {
      todo : TodosReducer.reducer,
      select : SelectedTodoSlice.reducer,
      counterApp : CounterUpdateApp.reducer
   }
})