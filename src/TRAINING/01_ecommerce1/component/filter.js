import React from 'react';

function Filter(props) {
   return(
      <div className="row">
         <div className="col-md-4"> products found.</div>
         <div className="col-md-4">
            <label>
               Order by
               <select
                  className="form-control"
                  value={props.filterName.sort}
                  onChange={props.handleChangeSort}
               >
               <option value="">Select</option>
               <option value="lowestprice">Lowest to highest</option>
               <option value="highestprice">Highest to lowest</option>
               </select>
            </label>
         </div>
         <div className="col-md-4">
            <label>
               {" "}
               Filter Size
               <select
                  className="form-control"
                  value={props.filterName.size}
                  onChange={props.handleChangeSize}
               >
               <option value="">ALL</option>
               <option value="xs">XS</option>
               <option value="s">S</option>
               <option value="m">M</option>
               <option value="l">L</option>
               <option value="xl">XL</option>
               <option value="xxl">XXL</option>
               </select>
            </label>
         </div>
      </div>
   )
}

export default Filter;