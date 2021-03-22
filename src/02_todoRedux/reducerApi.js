import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getPost = createAsyncThunk(
   'postData/getPost',
   async (args, {dispatch, getState, signal}) => {
      new axios.CancelToken(e => console.log(e))
      return axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.data);
   },
   {
      condition : (obj, {getState}) => {
         const { post } = getState();
         const fetchStatus = post.status;

         if(fetchStatus === 'succses') {
            return false;
         }
      }
   }
)

export const postReducer = createSlice({
   name : 'postData',
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
      },
      [getPost.rejected] : (state) => {
         state.status = 'failed';
      }
   }
})

export default postReducer;