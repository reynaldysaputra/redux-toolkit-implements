import {createSlice, createAsyncThunk, current} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataProduct = createAsyncThunk(
   'product1/get',
   async () => {
      return axios.get('http://localhost:8000/products')
         .then(res => res.data)
         .catch(err => err);
   }
)

export const productReducer1 = createSlice({
   name : 'product-reducer-1',
   initialState : {
      data : [], 
      filterProducts : [],
      sort : '',
      size : '',
      loading : false,
   },
   reducers : {
      filterBySize : (state, {payload : size}) => {
         state.size = size;
         if(state.size != ''){
            state.filterProducts = state.data.filter(item => item.availableSizes.indexOf(size.toUpperCase()) >= 0);
         }else {
            state.filterProducts = state.data;
         }
      },
      filterBySort : (state, {payload : sort}) => {
         state.sort = sort;

         if (state.sort !== '') {
            state.data.sort((a, b) =>
               (state.sort === 'lowestprice'
               ? ((a.price >= b.price) ? 1 : -1)
               : ((a.price <= b.price) ? 1 : -1)));         
         } else if(state.filterProducts != null) {
            state.data.sort((a, b) => (a.id > b.id) ? 1 : -1);
         }

         state.filterProducts = state.data;
      }
   },
   extraReducers : {
      [fetchDataProduct.pending] : (state, {payload}) => {
         state.loading = true;
      },
      [fetchDataProduct.fulfilled] : (state, {payload}) => {
         state.data = payload;
         state.filterProducts = payload;
         state.loading = false;
      }
   }
})

export const {
   filterBySize : filterBySizeEcommerce,
   filterBySort : filterBySortEcommerce
} = productReducer1.actions;