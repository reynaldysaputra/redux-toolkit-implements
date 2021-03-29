import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentSelector, deleteDataComments, fetchDataComments, patchDataComments, removeTagOne } from '../commentsSlice';
import Comments from '../component/comments';

function Blog(){
   const dispatch = useDispatch();
   const allComments = useSelector(commentSelector.selectAll);
   const deleteComment = useCallback((id) => dispatch(deleteDataComments(id)), [])
   const patchComment = useCallback((id, newData) => dispatch(patchDataComments({id, newData})), [])

   useEffect(() => {
      dispatch(fetchDataComments());
   }, [])

   return(
      <>
         {console.log('render parent')}
         <button onClick={() => dispatch(removeTagOne('3a28c1be-86fe-47e4-8da4-8360faea49cc'))}>Delete Tags</button>         
         {allComments.map(item => 
            <Comments 
               key={item.id} 
               data={item} 
               deleteComment={deleteComment} 
               patchComment={patchComment}
            />
         )}
      </>
   )
}

export default Blog;