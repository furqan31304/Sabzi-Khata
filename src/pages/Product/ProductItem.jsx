import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { productToggle } from '../../Redux/product/action'

const ProductItem = (props) => {
  const admin_id=localStorage.getItem('authToken');
  const dispatch=useDispatch();
  // const [productData, setProductData] = useState({
  //   admin_id:""
  //   status:"",
  //   product_id:props.id,    
  // })
  const handleInput=()=>{
    if(props.status==="1"){
      dispatch(productToggle({admin_id:admin_id,status:"0",product_id:props.id}));
      
    }
    else if(props.status==="0"){
      dispatch(productToggle({admin_id:admin_id,status:"1",product_id:props.id}));
    }
   }
  //  const submitProduct=()=>{
  //   dispatch(productToggle(productData));
  //  }
  return (
    <div className='product-card col-sm-2 shadow-lg'>
                  <div className='card-t row'>
                        <div className=' col-6'>
                        <div className='title row'>{props.title}</div>
                        <div className='qty row'>{props.measure}</div>
                        </div>
                        <div className='col-6'>
                        {/* <div className='cross-icon row'> <button type="button" class="btn-close"></button></div> */}
                        <div className='toggle-icon row mt-4'><div class="form-check form-switch"><input class="form-check-input" checked={props.status==="1"?true:false} type="checkbox" role="switch" id="flexSwitchCheckDisabled" onChange={handleInput}/></div></div>
                        </div>
                  </div>
                </div>
  )
}

export default ProductItem