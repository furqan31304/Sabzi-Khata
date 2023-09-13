import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCart } from '../../Redux/posSupplier/action';

const ProductForm1 = (props) => {
  const ddata=useSelector((state)=>state.posReducer.data)
    const dispatch=useDispatch();
    console.log("id is................",props.id)
    const [productData, setProductData] = useState(
      {
        product_id:props.id,
        quantity:null,
        price:null,
      }
  )
    const handleInput=(e)=>{
      setProductData({...productData,[e.target.name]:e.target.value})
      // console.log("Handle change product.........",productData)
      // dispatch(updateCart(productData))
      console.log("dtta:....",ddata)
      
     }

     useEffect(() => {
      console.log("Updated productData: ", productData);
      dispatch(updateCart(productData));
    }, [productData]);
  return (
    <>
    <div className='d-flex col row-auto mb-2'>
              <div className='col bg-light'style={{ borderRadius: "10px",paddingTop:"15px",paddingLeft:"12px" }}>
                <div className="d-flex align-middle justify-content-between ">
                    <div className="m-2">
                        <h3>{props.label}</h3>
                    </div>
                    <div className="d-flex  m-2 ">
                        <label htmlFor="qty" className="mx-2 mt-2 align-middle">kg/pcs</label>
                        <input  className="form-control w-25 " name="quantity" type="text" value={productData.quantity} placeholder="00" onChange={handleInput} />
                        <label htmlFor="price" className="mx-2 mt-2">price</label>
                        <input className="w-25 form-control " type="text" name="price" placeholder="00" value={productData.price} onChange={handleInput}/>
                        <button type="button" class="btn-close mt-2 mx-3 align-middle " onClick={()=>dispatch(removeFromCart(props.id))}></button>
                    </div>
                </div>
              </div>
            </div>
            </>
  )
}

export default ProductForm1