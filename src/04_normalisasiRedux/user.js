import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataUser } from './userSlice';

function User(){
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchDataUser());
   }, [])

   return(
      <>
         <h1>haha</h1>
      </>
   )
}

export default User;