import { createSlice } from '@reduxjs/toolkit';

export const counterReducer = createSlice({
   name : 'CounterReducer',
   initialState : {
      count : 0
   },
   reducers : {
      increment : (state) => {
         state.count += 1; 
      },
      decrement : (state) => {
         if(state.count > 0) state.count -= 1;
      },
      incrementByAmount : (state, action) => {
         state.count += action.payload
      }
   }
})

export const {increment, decrement, incrementByAmount} = counterReducer.actions;

export default counterReducer;