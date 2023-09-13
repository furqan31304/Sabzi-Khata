import React, { useState } from 'react'
import { addToCart, removeFromCart } from '../../Redux/posSupplier/action';
import { useDispatch } from 'react-redux';

const ProductCardMini1 = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch=useDispatch();
    const styles = {
      position: 'relative',
      minWidth: '124px', 
      minHeight: '80px',
      border: 'solid var(--bs-white)',
      borderRadius: '12px',
      margin: '10px',
      border: 'solid lightgrey 1px',
      background: isChecked ? '#1cbb8c' : '#FFFFFF',
     
    };
    const style2={
        color:isChecked? "#FFFFFF":'#000000'

    };
    const style3={
        color:isChecked? "#FFFFFF":'#000000'

    }
  
    const handleCheck=({label,id})=> {
      if(!isChecked){
        
        let data={label,id,price:"",quantity:""}
        dispatch(addToCart(data))
        setIsChecked(!isChecked);
        console.log("onClick data",data)
      }
      else if(isChecked){
        let data={label,id}
        dispatch(removeFromCart(id))
        setIsChecked(!isChecked);
        console.log("onClick data",data)
      }
      
      
    }
  return (
    // <div className='product-card-mini col-sm-1 shadow-lg' style={styles} onClick={handleCheck}>   
    //               <div className='card-t row'>
    //                     <div className=' col-6'>
    //                     <div className='title row' style={style2}>Potato</div>
    //                     <div className='qty' style={style3}>kg</div>
    //                     </div>
    //                     {/* <div className='col-6'>
    //                     <div className='cross-icon row'> <button type="button" class="btn-close"></button></div>
    //                     <div className='toggle-icon row'><div class="form-check form-switch"><input class="form-check-input" checked={props.status==="1"?true:false} type="checkbox" role="switch" id="flexSwitchCheckDisabled"/></div></div>
    //                     </div> */}
    //               </div>
    //             </div>
    <div className={`container bg-white rounded col-11 col-sm-11 col-md-3 col-lg-3 col-xl-2 m-1 shadow-sm ${isChecked?"border border-3 border-success":"border"}`} onClick={()=>handleCheck({label:props.label,id:props.id})}>
      <div className='col m-2'>
        <div className='row'><h5>{props.label}</h5></div>
        {/* <div className='d-flex justify-content-end'>{isChecked?<h7 className='bg-primary px-2 rounded-pill text-white'>selected</h7>:<h7 className='bg-primary px-2 text-white'> </h7>}</div> */}
      </div>
    </div>
                
  )
}

export default ProductCardMini1