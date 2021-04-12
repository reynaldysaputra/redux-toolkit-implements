import React, { useCallback, useEffect, useState } from 'react';
import Products from './component/product';
import axios from 'axios';
import Filter from './component/filter';

function Ecommerce1() {
   const [products, setProducts] = useState({data : null, filterProducts : null});
   const [filterName, setFilterName] = useState({ sort : '', size : '' });

   useEffect(() => {
      axios.get('http://localhost:8000/products')
         .then(res => {
            setProducts({
               data : res.data,
               filterProducts : res.data
            })
         })
      }, [])

   const handleChangeSort = (e) => setFilterName(state => ({...state, sort : e.target.value}));
   const handleChangeSize = (e) => setFilterName(state => ({...state, size : e.target.value}));

   useEffect(() => listProducts(), [filterName.sort, filterName.size]);
   
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
                  {console.log(filterName.size)}
                  <Filter 
                     filterName={filterName} 
                     handleChangeSort={handleChangeSort} 
                     handleChangeSize={handleChangeSize} 
                  /><br/>
                  {products.filterProducts !== null && <Products products={products.filterProducts} />}
               </div>
               <div className='col-md-4'></div>
            </div>
         </div>
      </>
   )
}

export default Ecommerce1;