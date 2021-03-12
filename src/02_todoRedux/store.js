import {configureStore} from '@reduxjs/toolkit'
import { TodosReducer, SelectedTodoSlice } from './reducer'

export const store = configureStore({
   reducer : {
      todo : TodosReducer.reducer,
      select : SelectedTodoSlice.reducer
   }
})