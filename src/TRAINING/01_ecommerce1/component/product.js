import React from 'react';

function Products(props) {
   return(
      <div className="row">
         {props.products.map(product => (
            <div className="col-md-4" key={product.id}>
               <div className="thumbnail text-center">
                  <a
                     href={`#${product.id}`}
                     // onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
                  >
                     <img src={`resource-training/01_ecommerceBasic1/products-img/${product.sku}_2.jpg`} alt={product.title} />
                     <p>{product.title}</p>
                  </a>
                  <b>{product.price}</b>
                  <button
                     className="btn btn-primary"
                     onClick={(e) => props.handleAddToCart(product)}
                  >
                     Add to cart
                  </button>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Products;