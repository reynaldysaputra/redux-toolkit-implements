import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from './reducerApi';

function PostApp(){
   const dispatch = useDispatch();
   const {data, status} = useSelector(state => state.post);

   return(
      <>
         <button onClick={() => dispatch(getPost())}>Get Data</button>
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