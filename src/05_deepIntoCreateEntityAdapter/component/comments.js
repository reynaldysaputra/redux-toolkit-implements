import React, {memo} from 'react';

function Comments({data, deleteComment, patchComment}){
   return(
      <div 
         style={{
            boxShadow:  "20px 20px 40px #c3c3c3, -20px -20px 40px #fdfdfd",
            margin : 30
         }}
      >  
         <h3>{data.id}</h3>
         <p>{data.body}</p>
         <button style={{color : 'red'}} onClick={() => deleteComment(data.id)}>Delete</button>
         <button style={{color : 'blue'}} onClick={() => patchComment(data.id, {body : 'NEW DATA'})}>Patch</button>
         {console.log('render children')}
      </div>
   )
}

export default memo(Comments);