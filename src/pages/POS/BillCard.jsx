import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardMini from "./ProductCardMini";
import ProductForm from "./ProductForm";
import { cart } from "../../Redux/pos/action";
import Loader from "../../components/Loader";

const BillCard = () => {
  const dispatch=useDispatch();
  
  const data=useSelector((state)=>state.posReducer.customer_set.data)
  const products=useSelector((state)=>state.posReducer.products)
  const loading=useSelector((state)=>state.posReducer.cart.loading)
  const total_amount=useSelector((state)=>state.posReducer.total_amount)
  const admin_id=localStorage.getItem("authToken")
  const [dataCart, setDataCart] = useState(
    {
      admin_id:"",
      customer_id:"",
      products:"",
      total_amount:"",
    }
)

const [updateProducts, setUpdateProducts] = useState()
  useEffect(() => {
   if(data!==null &&products!==null){
    setDataCart({
      admin_id: admin_id,
      customer_id: data.value,
      products: products,
      total_amount: total_amount
    })

   }
  }, [data,products]);



  useEffect(() => {
    if(data!==null){
 let abc=products
 console.log("abc",abc);
    }
   }, [products]);


  const handleSubmit=()=>{
    console.log("data in cart........:",dataCart)
    dispatch(cart(dataCart))
    setDataCart({
      admin_id: admin_id,
      customer_id:"",
      products: "",
      total_amount: ""
    })

  }
 
  return (
    <div className='col-sm-5'>
      <div className='card'>
        <div className='card-body'>
          <div className='row-auto'>
            <div className='col mt-0 d-flex justify-content-between align-items-center'>
              <h5 className='card-title'>Billing Details</h5>
            </div>

            <div className='row-auto border-top pt-1'>
              <div className='col mt-2'>
                <div className='d-flex justify-content-between '>
                  <h4>Account No:</h4>
                  <h6> {data.value}</h6>
                </div>
              </div>
              <div className='col mt-2'>
                <div className='d-flex justify-content-between '>
                  <h4>Customer Name:</h4>
                  <h6> {data.label}</h6>
                </div>
              </div>
            </div>
            <div className='col mt-2 d-flex justify-content-between align-items-center border-top'>
              <h5 className='card-title mt-2'>items</h5>
            </div>
            {
              products.map((product)=>products!==null&&<ProductForm id={product.id} label={product.label}/>)           
}
            





            <div className='d-flex col row-auto mb-2'>
              <div
                className='col bg-light'
                style={{ borderRadius: "10px",paddingTop:"15px",paddingLeft:"12px" }}
              >
                <div className="d-flex align-middle justify-content-between ">
                    <div className="m-2">
                        <h3>Total Amount: </h3>
                    </div>
                    <div className="d-flex  m-2 align-middle">
                    <h3>{total_amount}</h3>
                    </div>
                    
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center ">
              {
                loading?
                <div ><Loader/></div>
                :<button  className="btn btn-primary w-100" type="btn" onClick={handleSubmit}>Done</button>
              }
                
            </div>


            
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
