import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './reducerCounter';

function Counter(){
   const { count } = useSelector(state => state.counterReducer);
   const dispatch = useDispatch();

   return(
      <>
         {console.log('render')}
         <h1>{count}</h1>
         <button onClick={() => dispatch(increment())}>Increment</button>
         <button onClick={() => dispatch(decrement())}>Decrement</button>
         <button onClick={() => dispatch(incrementByAmount(10))}>IncrementByAmount</button>
      </>
   )
}

export default Counter;