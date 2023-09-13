import React, { useEffect, useState } from "react";
import { filter } from "feather-icons";
import ProductItem from "./ProductItem";
import ProductCard2 from "./ProductCard2";
import { useDispatch, useSelector } from "react-redux";
import { productAdd, productGet } from "../../Redux/product/action";
import Loader from '../../components/Loader';
function Product() {
  const dispatch=useDispatch();
  const id=localStorage.getItem('authToken');
  const product_data=useSelector((state)=>state.productReducer.product_get.data);
  const loading=useSelector((state)=>state.productReducer.product_get.loading);
  useEffect(() => {
    if(product_data===null){
      dispatch(productGet({admin_id:id}))
    }
    else {
      console.log("Product item:asdasdasdas:....",product_data)
    }

  }, [product_data]);
  
  const [filteredData, setFilteredData] = useState(product_data);
  const [selectedOption, setSelectedOption] = useState("all");
const [filter, setFilter] = useState(false)

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    if (event.target.value === "enabled") {
      setFilter(true)
      setFilteredData(product_data?.filter((item) => item.status === "1"));
    } else if (event.target.value === "disabled") {
      setFilter(true)
      setFilteredData(product_data?.filter((item) => item.status === "0"));
    } else {
      setFilter(false)
      setFilteredData(product_data);
    }
  };

  const [productData, setProductData] = useState({
    admin_id:id,
    label:'',
    unit:''    
  })
  const handleInput=(e)=>{
    console.log(productData)
    setProductData({...productData,[e.target.name]:e.target.value})
    
   }
   const submitProduct=(e)=>{
    e.preventDefault();
    dispatch(productAdd(productData));
   }
  return (
    <main className='content'>
      <div className='container-fluid p-0'>
        <h1 className='h3 mb-3'>
          <strong>Product </strong>Listing
        </h1>

        <div className='row bg-white pt-3' style={{borderRadius:"15px"}}>
          <div className='d-flex justify-content-end'>
            <div className='mt-2'>
              <div class='form-check form-check-inline'>
                <label class='form-check-label' for='inlineRadio1'>
                  Filter By
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                style={{borderRadius:"25px"}}
                  class='form-check-input'
                  type='radio'
                  name='enabledRadio'
                  id="enabledRadio"
          value="enabled"
          checked={selectedOption === "enabled"}
          onChange={handleOptionChange}
                />
                <label class='form-check-label' for='inlineRadio1'>
                  Enabled
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name="filterRadio"
          id="disabledRadio"
          value="disabled"
          checked={selectedOption === "disabled"}
          onChange={handleOptionChange}
                />
                <label class='form-check-label' for='inlineRadio2'>
                  Disabled
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name="filterRadio"
          id="allRadio"
          value="all"
          checked={selectedOption === "all"}
          onChange={handleOptionChange}
                />
                <label class='form-check-label' for='inlineRadio2'>
                  All
                </label>
              </div>
            </div>
            <div className=' m-1'>
              <input
                type='text'
                class='form-control rounded '
                id='exampleFormControlInput1'
                placeholder='Product'
               
              />
            </div>
            <div className=' m-1'>
              <button type="button" class="btn btn-success mx-2" style={{ backgroundColor: "darkblue", color: "white" }}  data-bs-toggle="modal" href="#exampleModalToggle2" role="button">Add New Product</button>
            </div>
          </div>
          <div className='m-1'>
            <hr />
          </div>

          <div className='col-xl-12 col-xxl-12 d-flex m-1 '>
            <div className='w-100'>
              <div className='row mx-1'>
                {loading?<Loader/>:filter?filteredData?.map((item)=><ProductItem title={item.label} measure={item.unit} status={item.status} id={item.id} />)
                 :product_data?.map((item)=><ProductItem title={item.label} measure={item.unit} status={item.status} id={item.id} />)
                
                }
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12 col-xxl-12 d-flex'>
            <div className='w-100'></div>
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
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Add Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="col-12">
     
  </div>
  <form class="row g-3" onSubmit={submitProduct}>
        
        <div class="col-md-12">
          <label htmlFor="name" class="form-label">Product Name<span style={{color:"red"}}>*</span></label>
          <input type="text" class="form-control" name='label' placeholder='Enter Name' id="label" onChange={handleInput} />
        </div>
        <div class="col-md-12">
          <label htmlFor="phone" class="form-label">Unit<span style={{color:"red"}}>*</span></label>
          <input type="text" class="form-control" name='unit' placeholder='kg/pcs' id="unit" onChange={handleInput} />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary w-100">Save</button>
        </div>
      </form>
      </div>
      {/* <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div> */}
    </div>
  </div>
</div>
    </main>
  );
}

export default Product;
