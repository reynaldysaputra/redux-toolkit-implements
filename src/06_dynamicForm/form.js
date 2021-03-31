import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createForm, setDataForm } from './formSlice';
import { v4 as uuidv4 } from 'uuid';

function MyDynamicForm(){
   const dispatch = useDispatch();
   const aLLId = useSelector(state => Object.keys(state.dynamicForm))
   const [inputFields, setInputFields] = useState([]);

   const handleChangeInput = (index, event) => {
      inputFields[Number(index)][event.target.name] = event.target.value;
   }

   return(
      <Fragment>
         <br/>
         <button onClick={() => {
            const id = uuidv4();
            dispatch(createForm(id))
            setInputFields([...inputFields, {id : id , namaBarang:'', jenisBarang:''}])
         }}>Create New Form</button>
         {aLLId.map((item,index) => (
            <div key={index}>
               <br/><br/>
               <h3>Input ke-{index+1}</h3>
               <input type="text" value={item}  disabled /><br/>
               <input 
                  type="text" 
                  name='namaBarang' 
                  placeholder='nama barang' 
                  value={item.namaBarang}
                  onChange={(event) => handleChangeInput(index, event)} 
               />
               <input 
                  type="text" 
                  name='jenisBarang'
                  placeholder='jenis barang' 
                  value={item.jenisBarang} 
                  onChange={(event) => handleChangeInput(index, event)} 
               />
            </div>
         ))}
         {aLLId.length ? <button onClick={() => dispatch(setDataForm(inputFields))}>Submit</button> : null}
      </Fragment>
   )
}

export default MyDynamicForm;