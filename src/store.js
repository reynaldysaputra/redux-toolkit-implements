import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './01_basicCounter/reducerCounter';
import { CounterUpdateApp, SelectedTodoSlice, TodosReducer } from './02_todoRedux/reducer';
import postReducer from './02_todoRedux/reducerApi';
import { TodoReducer2 } from './03_todoRedux(createEntityAdapter)/store/todoSlice';
import { userReducer } from './04_normalisasiRedux/userSlice';
import { commentReducer } from './05_deepIntoCreateEntityAdapter/commentsSlice';
import myDynamicFormSlice from './06_dynamicForm/formSlice';
import { cartReducer1 } from './TRAINING/01_ecommerce1/reducer/cartReducer';
import { productReducer1 } from './TRAINING/01_ecommerce1/reducer/productReducer';

export const store = configureStore({
   reducer : {
      counterReducer : counterReducer.reducer,
      todo : TodosReducer.reducer,
      select : SelectedTodoSlice.reducer,
      counterApp : CounterUpdateApp.reducer,
      post : postReducer.reducer,
      todoReducerAdaptor : TodoReducer2.reducer,
      user : userReducer.reducer,
      comments : commentReducer.reducer,
      dynamicForm : myDynamicFormSlice.reducer,
      product1 : productReducer1.reducer,
      cart1 : cartReducer1.reducer
   }
})