import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getPost = createAsyncThunk(
   'post/getPost',
   async (parameter, {dispatch, getState}) => {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.data);
   }
)

export const postReducer = createSlice({
   name : 'post',
   initialState : {
      data : [],
      status : null
   },
   extraReducers : {
      [getPost.pending] : (state) => {
         state.status = 'loading'
      },
      [getPost.fulfilled] : (state, action) => {
         state.data = action.payload;
         state.status = 'succses';
         console.log(action);
      },
      [getPost.rejected] : (state) => {
         state.status = 'failed';
      }
   }
})

export default postReducer;