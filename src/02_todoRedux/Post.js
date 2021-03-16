import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from './reducerApi';
import { unwrapResult } from '@reduxjs/toolkit';
 
function PostApp(){
   const dispatch = useDispatch();
   const {data, status} = useSelector(state => state.post);

   const handleClick = () => {
      dispatch(getPost())
         .then(unwrapResult) // fungsi unwrapResult menjadi fungsi tambahan, kita bisa membuat logika tambahan di komponen ini
         .then(res => console.log(res))
         .catch(err => console.log(err))     
   }  

   return(
      <>
         <button onClick={handleClick}>Get Data</button>
         {
            status == 'loading' ? <h1>Loading..</h1> : 
            <>
               <ul>
                  {data.map(item => (
                     <li key={item.id}>{item.title}</li>
                  ))}
               </ul>
            </>
         } 
      </>
   )
}

export default PostApp;