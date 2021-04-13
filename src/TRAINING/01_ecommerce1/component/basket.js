import React from 'react';

function Basket(props) {
   return(
      <div className="alert alert-info">
         {props.cartItems.length >= 1 ? 
            <div>You have {props.cartItems.length} items in the basket. <hr /></div> : "Basket is empty"}
         <div>
            <ul style={{ marginLeft: -25 }}>
               {props.cartItems.map(item => (
                  <li key={item.id}>
                     <b>{item.title} - {item.count} ${item.price * item.count}</b>
                     <button style={{ float: 'right' }} className="btn btn-danger btn-xs" onClick={() => props.handleRemoveFromCart(item)}>X</button>
                     <br/>
                  </li>
               ))}
            </ul>

            <b>Total: {props.cartItems.length >= 1 ? props.cartItems.reduce((acc, curr) => acc + curr.price * curr.count,0) : 0}</b>
            <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary">checkout</button>
         </div>
      </div>
   )
}

export default Basket;