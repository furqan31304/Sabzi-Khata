import React, { useEffect, useState } from 'react'
import ProductItem from '../Product/ProductItem';
import ProductCardMini from './ProductCardMini';
import { useDispatch, useSelector } from 'react-redux';
import { customerGet } from '../../Redux/customer/action';
import Select from 'react-select'
import { customerSet, productGetActive } from '../../Redux/pos/action';
import { productGet } from '../../Redux/product/action';


const CustomerCard = () => {
  const dispatch=useDispatch();
  const id=localStorage.getItem('authToken');
  const product_data=useSelector((state)=>state.productReducer.product_get.data);
  const loading=useSelector((state)=>state.productReducer.product_get.loading);
  const [activeProducts, setActiveProducts] = useState([])
  const [add_data, setAdd_Data] = useState({
    name:"",
    phone:"",
    adress:"",
})
  useEffect(() => {
    if(product_data===null){
      dispatch(productGet({admin_id:id}))
    }
    else if(product_data!==null){
        let active=product_data?.filter(item =>item?.status==='1');
        setActiveProducts(active)
      
    }

  }, [product_data]);
  const handleInput=(e)=>{
    console.log(add_data)
    setAdd_Data({...add_data,[e.target.name]:e.target.value})
    
   }
  console.log("Product item:asdasdasdas:....",activeProducts)

    const [data, setData] = useState()
    const customer_data=useSelector((state)=>state.customerReducer.customer_get.data)
    const [options, setOptions] = useState([])
    useEffect(() => {
        if(customer_data===null){
          dispatch(customerGet({admin_id:id}));
        }
        else{
          setData(customer_data)
          let customerNames = customer_data?.map((customer) => ({
            value: customer.customer_id,
            label: customer.name
          }));
      setOptions(customerNames)
        }
      }, [customer_data])
    // const data=[
    //     {
    //         id:1,
    //         name:"Muhammad Furqan",
    //         address:"Sadiqabad",
    //         phone:"03033899077"
    //     },
    //     {
    //         id:2,
    //         name:"Muhammad Ahmad",
    //         address:"Rahim yar Khan",
    //         phone:"03033899077"
    //     },
    //     {
    //         id:3,
    //         name:"Muhammad Nabeel",
    //         address:"Sadiqabad",
    //         phone:"03033899077"
    //     },
    //     {
    //         id:4,
    //         name:"Muhammad Usama",
    //         address:"Sadiqabad",
    //         phone:"03033899077"
    //     },
    //     {
    //         id:5,
    //         name:"Muhammad Zahid",
    //         address:"Sadiqabad",
    //         phone:"03033899077"
    //     }
    // ]
    
    // const handleInput=(e)=>{
    //   console.log(customer)
    //   setProductData({...productData,[e.target.name]:e.target.value})
      
    //  }
    //  const submitProduct=(e)=>{
    //   e.preventDefault();
    //   dispatch(productAdd(productData));
    //  }
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectChange=(selectedOption)=>{
    
      setSelectedOption(selectedOption); // Update state variable with selected option
      console.log(selectedOption)
      dispatch(customerSet(selectedOption))
    }

  return (
    <div className='col-sm-7'>
    <div className="card">
        <div className="card-body">
            <div className="row-auto">
                <div className="col mt-0 d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Customer Details</h5>
                </div>
                
                <div className='row-auto'>
                    
                    <div className='col mt-2'>
                    {/* <select class="form-select" aria-label="Default select example" onChange={(e) => {
                        const selectedCustomer = data.find(
                          (element) => element.name === e.target.value
                        );
                        setCustomer({
                          id: selectedCustomer.id,
                          name: selectedCustomer.name,
                          address: selectedCustomer.address,
                          phone: selectedCustomer.phone,
                        });
                      }}>
  <option >Select Customer</option>
  {
    data?.map((element)=>
    <option key={element.id}>{element.name}</option >)
  }
</select> */}
<Select 
value={selectedOption}
onChange={handleSelectChange}
isSearchable={true}
options={options}/>




                    </div>
                </div>
                {/* <div className="col mt-0 d-flex justify-content-between align-items-center mt-2">
                    <div className='w-50'><hr /></div>
                    <h5 className="px-2">Or</h5>
                    <div className='w-50'><hr /></div>
                    
                </div> */}
                {/* <div className="col mt-0 d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Add New Customer</h5>
                </div> */}
                
                {/* <div className='d-flex col row-auto'>
                    <div className='col mt-3 bg-light p-3' style={{"borderRadius":"10px"}}>
                    <form>
  <div class="form-group">
    <label for="fullname" className='mt-2'>Full Name</label>
    <input type="text" class="form-control mt-2" name='name' id="fullname"  placeholder="Enter Full Name" onChange={handleInput}/>
  </div>
  <div class="form-group mt-2">
    <label for="phone" className='mt-2'>Phone no</label>
    <input type="text" class="form-control mt-2" id="phone" name='phone'  placeholder="Enter Phone number" onChange={handleInput}/>
  </div>
  <div class="form-group">
    <label for="address" className='mt-2'>Address</label>
    <input type="textarea" name='adress' class="form-control mt-2" id="address" placeholder="Enter Address" onChange={handleInput}/>
  </div>
</form>

                    </div>
                    
                </div> */}
                <div className="col mt-3 d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Select Products</h5>
                    
                </div>
                
                    <div className='col m-1 bg-light d-flex ' style={{"borderRadius":"10px"}}>
                <div className="w-100">
                    <div className="d-flex row justify-content-start m-2">
                      {
                        activeProducts?.map((product)=><ProductCardMini id={product.id} label={product.label}/>)
                        
                        
                      }
                    
                    
                    </div>
                </div>
            
                    </div>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default CustomerCard