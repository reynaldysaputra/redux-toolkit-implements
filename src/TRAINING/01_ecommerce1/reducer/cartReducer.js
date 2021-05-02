import {createSlice, createAsyncThunk, current} from '@reduxjs/toolkit';

export const cartReducer1 = createSlice({
   name : 'cart-reducer-1',
   initialState : {
      cartItems : [],
   },
   reducers : {
      getProduct : (state) => {
         if(localStorage.getItem('cartItem-ecommerce1')) {
            state.cartItems = JSON.parse(localStorage.getItem('cartItem-ecommerce1'));
         }
      },
      addProduct : (state, {payload}) => {
         const cartItems = state.cartItems;
         let productAlReadyInCart = false;

         cartItems.forEach(item => {
            if(item.id === payload.id){
               productAlReadyInCart = true;
               item.count++;
            }
         })
         
         if(!productAlReadyInCart) {
            state.cartItems.push({...payload, count : 1})
         }

         localStorage.setItem('cartItem-ecommerce1', JSON.stringify(cartItems));
         
         state.cartItems = cartItems;
      },
      deleteProduct : (state, {payload}) => {
         const newDataCart = state.cartItems.filter(element => element.id != payload.id);
         state.cartItems = newDataCart;         
         localStorage.setItem('cartItem-ecommerce1', JSON.stringify(newDataCart));
      },
   }
})

export const {
   addProduct : createProductEcommerce, 
   getProduct : getProductEcommerce,
   deleteProduct : deleteProductEcommerce,
} = cartReducer1.actions