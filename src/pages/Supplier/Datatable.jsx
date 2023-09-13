import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import avatar from"../../avatars/profile.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { supplierAdd, supplierGet, supplierHistory, supplierPay, supplierUpdate } from '../../Redux/supplier/action';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../components/Loader';
function Datatable() {
  const id=localStorage.getItem('authToken')
  const [add_data, setAdd_Data] = useState({
    name:"",
    phone:"",
    address:"",
    amount:"",
    cnic:"",
    image:"",
    admin_id:id,
    
})
const [update_data, setUpdate_Data] = useState({
  name:"",
  phone:"",
  address:"",
  amount:"",
  cnic:"",
  image:"",
  admin_id:id,
  supplier_id:"",
  
})
const [amountData, setAmountData] = useState({
  admin_id:id,
  supplier_id:"",
  pay_amount:""
  
})
const handleInput=(e)=>{
    console.log(add_data)
    setAdd_Data({...add_data,[e.target.name]:e.target.value})
    
   }
   const handleInput2=(e)=>{
    console.log("updated data:",update_data)
    setUpdate_Data({...update_data,[e.target.name]:e.target.value})
    
   }
   const [totalAmount, setTotalAmount] = useState()
   const [supplier_id, setSupplier_Id] = useState()
   const [payamount,setPayAmount]=useState()
   const handleInput3=(e)=>{
    console.log("pay amount:",amountData)
    setAmountData({...amountData,[e.target.name]:e.target.value})
    
   }
   const submitPayAmount=(e)=>{
    e.preventDefault();
    console.log(data)
    if(amountData.pay_amount<=totalAmount){
      dispatch(supplierPay(amountData));
    }
    
   }
   const submitNewData=(e)=>{
    e.preventDefault();
    console.log(data)
    dispatch(supplierAdd(add_data));
   }
   const submitUpdateData=(e)=>{
    e.preventDefault();
    console.log(data)
    dispatch(supplierUpdate(update_data));
   }
  const [data, setData] = useState([])
  const dispatch=useDispatch()
  
  const supplier_data=useSelector((state)=>state.supplierReducer.supplier_get.data)
  const loading=useSelector((state)=>state.supplierReducer.supplier_get.loading)
  const add_message=useSelector((state)=>state.supplierReducer.supplier_add.error)
  const status=useSelector((state)=>state.supplierReducer.supplier_add.status)
  useEffect(() => {
    if(status){
      dispatch(supplierGet({admin_id:id}))
      toast.success(add_message, {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else if(!status){
      toast.error(add_message, {
        position: toast.POSITION.TOP_CENTER
    });

    }
  }, [status,add_message])
  
  useEffect(() => {
    if(supplier_data===null){
      dispatch(supplierGet({admin_id:id}));
    }
    else{
      setData(supplier_data)
    }
  }, [supplier_data])
  



    // Other functions
    const [filterCheck, setFilterCheck] = useState(false);
    const [search, setSearch] = useState(null);
    const [filter,setFilter]=useState([]);
    useEffect(() => {
      if(search!==null){
        setFilterCheck(true)
        const result=data?.filter(cus=>{
          return (cus?.name?.toLowerCase().match(search.toLowerCase()))
          
        })
        setFilter(result);
      }else{
            setFilter(data)
          }
        
      }, [search])
    const myNewTheme= {
        rows: {
            style:{ fontSize: '18px',
            padding:'5px'},
        },
        headCells: {
            style: {
                paddingLeft: '5px', // override the cell padding for head cells
                paddingRight: '5px',
                fontSize:"18px",
                margin:'10px'
            },
        },
        cells: {
            style: {
                paddingLeft: '5px', // override the cell padding for data cells
                paddingRight: '5px',
                padddingTop:'5px',
                margin:'10px'
            },
        },
    

      }
    const columns = [
        {
            name: 'Account no',
            selector: row => <div style={{fontSize:"18px"}}>{row.supplier_id}</div>,
            sortable:"true",
        },
        {
            name: 'Photo',
            selector: row => <img src={avatar} style={{width:"64px",borderRadius:"100%"}}></img>,
            sortable:"true"
        },
        {
            name: 'Name',
            selector: row => <div style={{fontSize:"18px"}}>{row.name}</div>,
            width:"auto",
            sortable:"true"
        },
        {
            name: 'Phone No',
            selector: row => <div style={{fontSize:"18px"}}>{row.phone}</div>,
            sortable:"true"
        },
        {
            name: 'Address',
            selector: row => <div style={{fontSize:"18px"}}>{row.address}</div>,
            sortable:"true"
        },  
        {
            name: 'Total Amount',
            selector: row => <div style={{fontSize:"18px"}}>{row.amount}</div>,
            sortable:"true"
        },
        {
            name: 'Action',
            selector: row => <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button   class="btn btn-warning" data-bs-toggle="modal" href="#exampleModalToggle" type='button' onClick={()=>setUpdate_Data({...update_data,supplier_id:row.supplier_id,name:row.name,phone:row.phone,amount:row.amount,address:row.address,cnic:row.cnic})}><i class="fa fa-pencil" aria-hidden="true"></i></button>
            <Link type="button" class="btn btn-primary" to="/layout/supplier/supplierdetials" state={{ data: row }} onClick={()=>dispatch(supplierHistory({admin_id:id,supplier_id:row.supplier_id}))}><i class="fa fa-eye" aria-hidden="true"></i></Link>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>{setTotalAmount(row.amount);setAmountData({...amountData,supplier_id:row.supplier_id})}}><i class="fa fa-money" aria-hidden="true"></i></button>
          </div>,
          width:"auto"
          
        },
    ];
    
//     const data = [
//         {
//             id: 1,
//             name:'فرقان',
//             phone:'0303899077',
//             address:"Sadiqabad",
//             total_Amount:"100000",
            
//         },
//         {
//             id: 2,
//             name:'Muhammad Furqan',
//             phone:'0303899077',
//             address:"Sadiqabad",
//             total_Amount:"100000",
//         },
//         {
//             id: 3,
//             name:'Muhammad Ahmad',
//             phone:'0303899077',
//             address:"Sadiqabad",
//             total_Amount:"100000",
//         },
//         {
//           id: 4,
//           name:'Nabeel',
//           phone:'0303899077',
//           address:"Sadiqabad",
//           total_Amount:"100000",
//       },
//       {
//           id: 5,
//           name:'Zain',
//           phone:'0303899077',
//           address:"Sadiqabad",
//           total_Amount:"100000",
//       },
//       {
//         id: 6,
//         name:'Khubab',
//         phone:'0303899077',
//         address:"Sadiqabad",
//         total_Amount:"100000",
//     },
//     {
//       id: 7,
//       name:'Usama',
//       phone:'0303899077',
//       address:"Sadiqabad",
//       total_Amount:"100000",
//   },
//   {
//     id: 8,
//     name:'Rafiq',
//     phone:'0303899077',
//     address:"Sadiqabad",
//     total_Amount:"100000",
// },
// {
//     id: 9,
//     name:'فرقان',
//     phone:'0303899077',
//     address:"Sadiqabad",
//     total_Amount:"100000",
    
// },
// {
//     id: 10,
//     name:'Muhammad Furqan',
//     phone:'0303899077',
//     address:"Sadiqabad",
//     total_Amount:"100000",
// },
// {
//     id: 11,
//     name:'Muhammad Ahmad',
//     phone:'0303899077',
//     address:"Sadiqabad",
//     total_Amount:"100000",
// },
// {
//   id: 12,
//   name:'Nabeel',
//   phone:'0303899077',
//   address:"Sadiqabad",
//   total_Amount:"100000",
// },
// {
//   id: 13,
//   name:'Zain',
//   phone:'0303899077',
//   address:"Sadiqabad",
//   total_Amount:"100000",
// },
// {
// id: 14,
// name:'Khubab',
// phone:'0303899077',
// address:"Sadiqabad",
// total_Amount:"100000",
// },
// {
// id: 15,
// name:'Usama',
// phone:'0303899077',
// address:"Sadiqabad",
// total_Amount:"100000",
// },
// {
// id: 16,
// name:'Rafiq',
// phone:'0303899077',
// address:"Sadiqabad",
// total_Amount:"100000",
// },
//     ]
  return (
    
    
    <>
    
    {loading?
    <div className='d-flex justify-content-center align-item-center' style={{marginTop:"200px"}}>
    <Loader/>
    </div>
    :<>
    {filterCheck?
    <DataTable
    pagination={true}
    columns={columns}
    customStyles={myNewTheme}
    data={filter}
    subHeader
            subHeaderComponent={<>
              <input type="text" class="form-control w-25" value={search} onChange={(e)=>setSearch(e.target.value)} id="InputSearch" placeholder='Search Supplier' aria-describedby="emailHelp"/>
              <button type="button" class="btn btn-success mx-2" data-bs-toggle="modal" href="#exampleModalToggle2" role="button">Add New Supplier</button>
              </>
            }>
            </DataTable>:
            <DataTable
            pagination={true}
            columns={columns}
            customStyles={myNewTheme}
            data={data}
            subHeader
                    subHeaderComponent={<>
                      <input type="text" class="form-control w-25" value={search} onChange={(e)=>setSearch(e.target.value)} id="InputSearch" placeholder='Search Supplier' aria-describedby="emailHelp"/>
                      <button type="button" class="btn btn-success mx-2" data-bs-toggle="modal" href="#exampleModalToggle2" role="button">Add New Supplier</button>
                      </>
                    }>
                    </DataTable>
}
                    </>
            }
    

    


{/* .............................................................................................. */}
                                    {/* Edit Supplier Modal */}
            
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Edit Supplier Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="col-12">
     
  </div>
      <form class="row g-3" onSubmit={submitUpdateData}>
        
  <div class="col-md-6">
    <label htmlFor="name" class="form-label">Name <span style={{color:"red"}}>*</span></label>
    <input type="text" class="form-control" name='name' value={update_data.name} placeholder='Enter Full Name' id="name" onChange={handleInput2}/>
  </div>
  <div class="col-md-6">
    <label htmlFor="phone" class="form-label">Phone No <span style={{color:"red"}}>*</span></label>
    <input type="number" class="form-control" name='phone' value={update_data.phone} placeholder='Enter Phone number' id="phone" onChange={handleInput2}/>
  </div>
  <div class="col-12">
    <label htmlhtmlFor='cnic' class="form-label">CNIC</label>
    <input type="text" class="form-control" id="cnic" name='cnic' value={update_data.cnic} placeholder="Enter cnic" onChange={handleInput2}/>
  </div>
  <div class="col-12">
    <label htmlFor="address" class="form-label">Address</label>
    <input type="text" class="form-control" name='address' placeholder="Enter Address" value={update_data.address} id="address" onChange={handleInput2}/>
  </div>
  <div class="col-12">
    <label htmlFor="amount" class="form-label">Total Amount</label>
    <input type="text" class="form-control" id="amount" name='amount' placeholder="Enter Amount" value={update_data.amount} onChange={handleInput2}/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary w-100">Done</button>
  </div>
</form>
      </div>
      {/* <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div> */}
    </div>
  </div>
</div>
{/* ............................................................... */}


{/* .............................................................................................. */}
                                    {/* Add New Supplier Modal */}
            
                                    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Add New Supplier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="col-12">
     
  </div>
  <form class="row g-3" onSubmit={submitNewData}>
        
        <div class="col-md-6">
          <label htmlFor="name" class="form-label">Name <span style={{color:"red"}}>*</span></label>
          <input type="text" class="form-control" name='name' placeholder='Enter Full Name' id="name" onChange={handleInput}/>
          {add_data.name.length<1&&<span className='text-danger'>Please Enter Full Name</span>}
        </div>
        <div class="col-md-6">
          <label htmlFor="phone" class="form-label">Phone No <span style={{color:"red"}}>*</span></label>
          <input type="number" class="form-control" name='phone' placeholder='Enter Phone number' id="phone" onChange={handleInput}/>
          {add_data.phone.length<11&&<span className='text-danger'>Please enter 11 numbers</span>}
        </div>
        <div class="col-12">
          <label htmlhtmlFor='cnic' class="form-label">Cnic</label>
          <input type="text" class="form-control" id="cnic" name='cnic' placeholder="Enter cnic" onChange={handleInput}/>
          {add_data.cnic.length<13&&<span className='text-danger'>Please enter 13 numbers with out dashes</span>}
          
        </div>
        <div class="col-12">
          <label htmlFor="address" class="form-label">Address</label>
          <input type="text" class="form-control" name='address' placeholder="Enter Address" id="address" onChange={handleInput}/>
          {add_data.address.length===0&&<span className='text-danger'>Address is required</span>}
        </div>
        <div class="col-12">
          <label htmlFor="amount" class="form-label">Total Amount</label>
          <input type="text" class="form-control" id="amount" name='amount' placeholder="Enter Amount" onChange={handleInput}/>
          {add_data.amount.length===0&&<span className='text-danger'>Amount is required</span>}
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary w-100">Done</button>
        </div>
      </form>
      </div>
      {/* <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div> */}
    </div>
  </div>
</div>
{/* ............................................................... */}


{/* ............................................................... */}
{/* Payment Add Modal */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Payment Recovery</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-12">
    <label htmlFor="validationCustom01" class="form-label">Total Amount</label>
    <input type="text" class="form-control" id="validationCustom01" value={totalAmount} disabled required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-12">
    <label htmlFor="validationCustom02" class="form-label">Pay Amount</label>
    <input type="text" class="form-control" id="validationCustom02" name='pay_amount' value={amountData.pay_amount} onChange={handleInput3} required/>
    {/* {amountData.pay_amount>totalAmount&&<span className='text-danger'>Please enter the amount less than total amount</span>} */}
  </div>  
  
</form>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-success col-md-12" onClick={submitPayAmount}>Done</button>
      <button type="button" class="btn btn-light col-md-12" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
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
{/* .......................................................... */}

            </>
  )
}

export default Datatable