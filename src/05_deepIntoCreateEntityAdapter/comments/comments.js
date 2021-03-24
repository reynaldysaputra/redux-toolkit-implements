import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataComments } from './commentsSlice';

function Comments(){
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchDataComments());
   }, [])

   return(
      <h1>hello word</h1>
   )
}

export default Comments;