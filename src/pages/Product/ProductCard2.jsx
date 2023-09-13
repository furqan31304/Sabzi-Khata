import React from 'react'
import onion from '../../avatars/onion.png'
const ProductCard2 = () => {
  return (
    <div className='bg-light col-2 mx-1 mb-2'>
        <div className='col '>
            
            <div className='row text-center pt-3'><h3>Potato</h3></div>
            <div className='row text-center'><h6>Qty: Pr kg</h6></div>
            <div className='row pb-1'><img className='img-fuild' src={onion} alt="" /></div>
            <div className='row pb-2'>
                <div className='col'> button</div>
                <div className='col'> <h6 className='bg-warning text-white rounded-pill text-center p-1'>Active</h6></div>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard2