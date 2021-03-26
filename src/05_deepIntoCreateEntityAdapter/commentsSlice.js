import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataComments = createAsyncThunk(
   'comments/fetchData',
   async () => {
      const data = await axios.get('http://localhost:5000/comment')
         .then(res => res.data)
         .catch(err => err)

      // Menormalisasikan data 
      const like = data.reduce((prev, curr) => [...prev, curr.like], []).flat();
      const tags = data.reduce((prev, curr) => [...prev, curr.tags], []).flat();
      
      return {
         data : data.map(({id, body}) => ({id, body})),
         like,
         tags
      };
   }
)

export const deleteDataComments = createAsyncThunk(
   'comments/deleteData',
   async (id) => {
      return axios.delete(`http://localhost:5000/comment/${id}`)
         .then(res => id)
         .catch(err => err);
   }
)

export const patchDataComments = createAsyncThunk(
   'comments/patchData',
   async ({id, newData}) => {
      await axios(`http://localhost:5000/comment/${id}`,{
         method : 'PATCH',
         data : JSON.stringify(newData)
      })

      return {id, newData};
   }   
)

const commentAdapter = createEntityAdapter();
const tagsAdapter = createEntityAdapter();
const likeAdapter = createEntityAdapter();

export const commentReducer = createSlice({
   name : 'comment',
   initialState : commentAdapter.getInitialState({
      loading : false,
      error : false,
      tags : tagsAdapter.getInitialState(),
      likes : likeAdapter.getInitialState()
   }),
   reducers : {},
   extraReducers : {
      [fetchDataComments.pending] : (state) => {
         state.loading = true;
      },
      [fetchDataComments.fulfilled] : (state, {payload}) => {
         state.loading = false;

         commentAdapter.setAll(state, payload.data);
         commentAdapter.setAll(state.likes, payload.like);
         commentAdapter.setAll(state.tags, payload.tags);
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