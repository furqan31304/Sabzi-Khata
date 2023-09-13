import React, { useState } from 'react'
import AnaCard from '../../components/AnaCard'
import ProductItem from '../Product/ProductItem'
import BillCard from './BillCard1'
import CustomerCard from './CustomerCard1'
import ProductCardMini from './ProductCardMini1'
import { useDispatch, useSelector } from 'react-redux'
import { activeProductGet, productGetActive } from '../../Redux/pos/action'
import { useEffect } from 'react'
import { productGet } from '../../Redux/product/action'
import CustomerCard1 from './CustomerCard1'
import BillCard1 from './BillCard1'
import { ToastContainer, toast } from 'react-toastify'

const PosSupplier = () => {
    const errors = useSelector((state) => state.posSupReducer.cart.error);
    //   const message = useSelector((state) => state.posReducer.cart.message);
        useEffect(() => {
            if (errors !== null) {
              setTimeout(() => {
                toast.success(errors, {
                    position: toast.POSITION.TOP_CENTER
                });
                // toast.error(error);
              }, 200);
              // dispatch(clearError());
            }
            // if (message !== null) {
            //     setTimeout(() => {
            //       toast.success(message, {
            //           position: toast.POSITION.TOP_CENTER
            //       });
            //       // toast.error(error);
            //     }, 200);
            //     // dispatch(clearError());
            //   }
          }, [errors]);
  return (
    <main className='content'>
    <div className='container-fluid p-0'>
      <h1 className='h3 mb-3'>
        <strong>Add </strong>Purchase
      </h1>

      <div className="row">
            <div className="col-xl-12 col-xxl-12 d-flex">
                <div className="w-100">
                    <div className="row">
                       <CustomerCard1 />
                       <BillCard1/>
                        
                    </div>
                </div>
            </div>

            {/* <div className="col-xl-6 col-xxl-7">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Recent Movement</h5>
                    </div>
                    <div className="card-body py-3">
                        <div className="chart chart-sm">
                            <canvas id="chartjs-dashboard-line"></canvas>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      
    </div>
    
    <ToastContainer
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
			/>
    
  </main>
  )
}

export default PosSupplier