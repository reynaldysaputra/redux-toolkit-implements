import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataUser = createAsyncThunk('users/fetchData', async (_, {dispatch}) => {
   return axios.get('http://localhost:5000/user')
      .then(res => {
         const user = res.data.map(({articles, comments, ...data}) => ({
            ...data,
            articles : articles.map(item => item.id),
            comments : comments.map(item => item.id),
         }))

         dispatch(setUser(user));
      })
})

const usersAdapter = createEntityAdapter();

export const userReducer = createSlice({
   name : 'user',
   initialState : usersAdapter.getInitialState(),
   reducers : {
      setUser : usersAdapter.setAll
   }
})

export const {setUser} = userReducer.actions;