import React, { useCallback, useEffect, useState } from 'react';
import Products from './component/product';
import axios from 'axios';
import Filter from './component/filter';
import Basket from './component/basket';

function Ecommerce1() {
   const [products, setProducts] = useState({data : null, filterProducts : null, cartItems : []});
   const [filterName, setFilterName] = useState({ sort : '', size : '' });

   useEffect(() => {
      axios.get('http://localhost:8000/products')
         .then(res => {
            setProducts(state => ({
               ...state,
               data : res.data,
               filterProducts : res.data
            }))
         })

         if(localStorage.getItem('cartItem-ecommerce1')) {
            setProducts(state => ({
               ...state,
               cartItems : JSON.parse(localStorage.getItem('cartItem-ecommerce1'))
            }))
         }
      }, [])
   
   useEffect(() => listProducts(), [filterName.sort, filterName.size]);

   const handleChangeSort = (e) => setFilterName(state => ({...state, sort : e.target.value}));
   const handleChangeSize = (e) => setFilterName(state => ({...state, size : e.target.value}));

   const handleAddToCart = (product) => {
      setProducts(state => {
         const cartItems = state.cartItems;
         let productAlReadyInCart = false;

         cartItems.forEach(item => {
            if(item.id === product.id){
               productAlReadyInCart = true;
               item.count++;
            }
         })
         
         if(!productAlReadyInCart) {
            state.cartItems.push({...product, count : 1})
         }

         localStorage.setItem('cartItem-ecommerce1', JSON.stringify(cartItems));
         
         return {...state, cartItems : cartItems};
      })
   }

   const handleRemoveFromCart = (item) => {
      setProducts(state => {
         const newDataCart = state.cartItems.filter(element => element.id != item.id);

         localStorage.setItem('cartItem-ecommerce1', JSON.stringify(newDataCart));

         return {...state, cartItems : newDataCart}
      })
   }
   
   const listProducts = () => {
      setProducts(state => {
         if (filterName.sort !== '') {
            state.data.sort((a, b) =>
               (filterName.sort === 'lowestprice'
               ? ((a.price >= b.price) ? 1 : -1)
               : ((a.price <= b.price) ? 1 : -1)));         
         } else if(products.filterProducts != null) {
            products.filterProducts.sort((a, b) => (a.id > b.id) ? 1 : -1);
         }

         if(filterName.size != ''){
            return {...state, filterProducts : state.data.filter(item => item.availableSizes.indexOf(filterName.size.toUpperCase()) >= 0)}
         }

         return {...state, filterProducts : state.data};
      })
   };
   
   return(
      <>
         <br/>
         <div className='container'>
            <h2>Ecommerce Shopping Cart Application</h2>
            <hr/>

            <div className='row'>
               <div className='col-md-8'>
                  <Filter 
                     filterName={filterName} 
                     handleChangeSort={handleChangeSort} 
                     handleChangeSize={handleChangeSize} 
                  /><br/>
                  {products.filterProducts !== null && <Products products={products.filterProducts} handleAddToCart={handleAddToCart} />}
               </div>
               <div className='col-md-4'>
                  <Basket cartItems={products.cartItems} handleRemoveFromCart={handleRemoveFromCart} />
               </div>
            </div>
         </div>
      </>
   )
}

export default Ecommerce1;