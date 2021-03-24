import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataComments = createAsyncThunk(
   'comments/fetchData',
   async () => {
      return axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
         .then(res => res.data)
         .catch(err => err)
   }
)

const commentAdapter = createEntityAdapter();

export const commentReducer = createSlice({
   name : 'comment',
   initialState : commentAdapter.getInitialState({
      loading : false,
      error : false
   }),
   reducers : {},
   extraReducers : {
      [fetchDataComments.pending] : (state) => {
         state.loading = true;
      },
      [fetchDataComments.fulfilled] : (state, action) => {
         state.loading = false;
         commentAdapter.setAll(state, action);
      },
      [fetchDataComments.rejected] : (state, action) => {
         state.loading = false;
         state.error = action;
      }
   }
})