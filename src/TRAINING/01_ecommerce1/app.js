import React, { useCallback, useEffect, useState } from 'react';
import Products from './component/product';
import Filter from './component/filter';
import Basket from './component/basket';
import { fetchDataProduct, filterBySizeEcommerce, filterBySortEcommerce } from './reducer/productReducer';
import { getProductEcommerce } from './reducer/cartReducer';
import { useDispatch, useSelector } from 'react-redux';

function Ecommerce1() {
   const dispatch = useDispatch();
   const product = useSelector(state => state.product1);
   const cart = useSelector(state => state.cart1);

   useEffect(() => {
      dispatch(fetchDataProduct());
      dispatch(getProductEcommerce());
   }, [])
   
   const handleChangeSort = (e) => dispatch(filterBySortEcommerce(e));
   const handleChangeSize = (e) => dispatch(filterBySizeEcommerce(e));
   
   return(
      <>
         <br/>
         <div className='container'>
            <h2>Ecommerce Shopping Cart Application</h2>
            <hr/>

            <div className='row'>
               <div className='col-md-8'>
                  <Filter 
                     filterName={product} 
                     handleChangeSort={handleChangeSort} 
                     handleChangeSize={handleChangeSize} 
                  /><br/>
                  {product.filterProducts !== null && <Products products={product.filterProducts}  />}
               </div>
               <div className='col-md-4'>
                  <Basket cartItems={cart.cartItems}/>
               </div>
            </div>
         </div>
      </>
   )
}

export default Ecommerce1;