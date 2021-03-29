import { createAsyncThunk, createSlice, createEntityAdapter, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataComments = createAsyncThunk(
   'comments/fetchData',
   async () => {
      const data = await axios.get('http://localhost:5000/comment')
         .then(res => res.data)
         .catch(err => err)

      // Menormalisasikan data 
      const mappedData = data.map((comment) => ({
         ...comment,
         tags: comment.tags.map((tag) => ({ ...tag, commentId: comment.id })),
         like: comment.like.map((like) => ({ ...like, commentId: comment.id })),
      }))

      const like = mappedData.reduce((prev, curr) => [...prev, curr.like], []).flat();
      const tags = mappedData.reduce((prev, curr) => [...prev, curr.tags], []).flat();

      const comments = mappedData.map(({ id, body, like, tags }) => ({
         id,
         body,
         likeIds: like.map((like) => like.id),
         tagsIds: tags.map((tag) => tag.id),
      }))
      
      return { comments, like, tags }
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
      like : likeAdapter.getInitialState()
   }),
   reducers : {
      removeTagOne : (state, {payload : tagID}) => {
         // Cari commentId di tagsAdapter lewat tagID
         console.log(tagID);
         const { commentId } = tagsAdapter
            .getSelectors()
            .selectById(state.tags, tagID)

         // Cari data comment di adapter comment dengan mengambil commentId dan mencocokan di comment adapter
         const comment = commentAdapter
            .getSelectors()
            .selectById(state, commentId);
         
         // Update dan hapus id tags di commentAdapter
         commentAdapter.updateOne(state, {
            id: comment.id,
            changes: {
               ...comment,
               tagsIds: comment.tagsIds.filter((id) => id !== tagID),
            },
         })
         
         // Hapus data tag di tagsAdapter melalui id yang dikirim di tagID
         tagsAdapter.removeOne(state.tags, tagID);         
      }
   },
   extraReducers : {
      [fetchDataComments.pending] : (state) => {
         state.loading = true;
      },
      [fetchDataComments.fulfilled] : (state, {payload}) => {
         state.loading = false;

         console.log(payload);
         
         commentAdapter.setAll(state, payload.comments);
         commentAdapter.setAll(state.like, payload.like);
         commentAdapter.setAll(state.tags, payload.tags);
      },
      [fetchDataComments.rejected] : (state, action) => {
         state.loading = false;
         state.error = action;
         console.log(action);
      },
      [deleteDataComments.fulfilled] : (state, {payload : id}) => {
         commentAdapter.removeOne(state, id);
      },
      [deleteDataComments.rejected] : (state, action) => {
         console.log(current(state));
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

export const {removeTagOne} = commentReducer.actions;

export const commentSelector = commentAdapter.getSelectors(state => state.comments);