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

export const deleteDataComments = createAsyncThunk(
   'comments/deleteData',
   async (id) => {
      return axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
         .then(res => id)
         .catch(err => err);
   }
)

export const patchDataComments = createAsyncThunk(
   'comments/patchData',
   async ({id, newData}) => {
      await axios(`https://jsonplaceholder.typicode.com/comments/${id}`,{
         method : 'PATCH',
         data : JSON.stringify(newData)
      })

      return {id, newData};
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
      },
      [deleteDataComments.fulfilled] : (state, {payload : id}) => {
         commentAdapter.removeOne(state, id);
      },
      [deleteDataComments.rejected] : (state, action) => {
         console.log(action);
      },
      [patchDataComments.pending] : (state) => {
         state.loading = true;
      },
      [patchDataComments.fulfilled] : (state, {payload}) => {
         commentAdapter.updateOne(state, {
            id : payload.id,
            changes : payload.newData
         })
      },
      [patchDataComments.rejected] : (state, {payload}) => {
         console.log(payload);
      }
   }
})

export const commentSelector = commentAdapter.getSelectors(state => state.comments);