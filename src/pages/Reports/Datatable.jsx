import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import avatar from"../../avatars/profile.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customerAdd, customerGet, customerHistory, customerPay, customerUpdate } from '../../Redux/customer/action';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../components/Loader';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { customerReport } from '../../Redux/customerReport/action';
function Datatable() {
  const id=localStorage.getItem('authToken')
  const dispatch=useDispatch();
//   const [add_data, setAdd_Data] = useState({
//     name:"",
//     phone:"",
//     adress:"",
//     amount:"",
//     cnic:"",
//     image:"",
//     admin_id:id,
    
// })
// const [update_data, setUpdate_Data] = useState({
//   name:"",
//   phone:"",
//   adress:"",
//   amount:"",
//   cnic:"",
//   image:"",
//   admin_id:id,
//   customer_id:"",
  
// })
// const [amountData, setAmountData] = useState({
//   admin_id:id,
//   customer_id:"",
//   pay_amount:""
  
// })
// const handleInput=(e)=>{
//     console.log(add_data)
//     setAdd_Data({...add_data,[e.target.name]:e.target.value})
    
//    }
//    const handleInput2=(e)=>{
//     console.log("updated data:",update_data)
//     setUpdate_Data({...update_data,[e.target.name]:e.target.value})
    
//    }
//    const [totalAmount, setTotalAmount] = useState()
   
//    const handleInput3=(e)=>{
//     console.log("pay amount:",amountData)
//     setAmountData({...amountData,[e.target.name]:e.target.value})
    
//    }
//    const submitPayAmount=(e)=>{
//     e.preventDefault();
//     console.log(data)
//     if(amountData.pay_amount<=totalAmount){
//       dispatch(customerPay(amountData));
//     }
    
//    }
//    const submitNewData=(e)=>{
//     e.preventDefault();
//     console.log(data)
//     dispatch(customerAdd(add_data));
//    }
//    const submitUpdateData=(e)=>{
//     e.preventDefault();
//     console.log(data)
//     dispatch(customerUpdate(update_data));
//    }
  const [data, setData] = useState([])
//   const dispatch=useDispatch()
  
  const customer_data=useSelector((state)=>state.customerReportReducer.customer_report.data)
  const loading=useSelector((state)=>state.customerReportReducer.customer_report.loading)
 
  // useEffect(() => {
  //   if(status){
  //     dispatch(customerGet({admin_id:id}))
  //     toast.success(add_message, {
  //       position: toast.POSITION.TOP_CENTER
  //   });
  //   }
  //   else if(!status){
  //     toast.error(add_message, {
  //       position: toast.POSITION.TOP_CENTER
  //   });

  //   }
  // }, [status,add_message])
  
  useEffect(() => {
    if(customer_data===null){
      dispatch(customerReport({admin_id:id}));
    }
    else{
      setData(customer_data)
    }
  }, [customer_data])
  
  const exportToPDF = () => {
    const doc = new jsPDF();
  
    const tableColumns = ['Account No', 'Name', 'Address', 'Fresh Amount','Remaining Amount','Total Amount'];
  
    const tableData = data?.map(item => [
      item.customer_id,
      item.name,
      item.adress,
      item.fresh_amount,
      item.rummening_amount,
      item.total_amount,
    ]);
  
    doc.autoTable({
      head: [tableColumns],
      body: tableData,
    });
  
    doc.save("PDF FILE");
  };



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
            selector: row => <div style={{fontSize:"18px"}}>{row.customer_id}</div>,
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
            name: 'Address',
            selector: row => <div style={{fontSize:"18px"}}>{row.adress}</div>,
            sortable:"true"
        }, 
        {
          name: 'Fresh Amount',
          selector: row => <div style={{fontSize:"18px"}}>{row.fresh_amount}</div>,
          sortable:"true"
      },
      {
        name: 'Remaining Amount',
        selector: row => <div style={{fontSize:"18px"}}>{row.rummening_amount}</div>,
        sortable:"true"
    },
        {
            name: 'Total Amount',
            selector: row => <div style={{fontSize:"18px"}}>{row.total_amount}</div>,
            sortable:"true"
        },
        // {
        //     name: 'Action',
        //     selector: row => <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
        //     <button   class="btn btn-warning" data-bs-toggle="modal" href="#exampleModalToggle" type='button' onClick={()=>setUpdate_Data({...update_data,customer_id:row.customer_id,name:row.name,phone:row.phone,amount:row.amount,adress:row.adress,cnic:row.cnic})}><i class="fa fa-pencil" aria-hidden="true"></i></button>
        //     <Link type="button" class="btn btn-primary" to="/layout/customer/customerdetials" state={{ data: row }} onClick={()=>dispatch(customerHistory({admin_id:id,customer_id:row.customer_id}))}><i class="fa fa-eye" aria-hidden="true"></i></Link>
        //     <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>{setTotalAmount(row.amount);setAmountData({...amountData,customer_id:row.customer_id})}}><i class="fa fa-money" aria-hidden="true"></i></button>
        //   </div>,
        //   width:"auto"
          
        // },
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
              {/* <input type="text" class="form-control w-25" value={search} onChange={(e)=>setSearch(e.target.value)} id="InputSearch" placeholder='Search Customer' aria-describedby="emailHelp"/> */}
              <button type="button" class="btn btn-success mx-2"  onClick={exportToPDF}>Download PDF</button>
              </>
            }
            >
            </DataTable>:
            <DataTable
            pagination={true}
            columns={columns}
            customStyles={myNewTheme}
            data={data}
            subHeader
                    subHeaderComponent={<>
                      {/* <input type="text" class="form-control w-25" value={search} onChange={(e)=>setSearch(e.target.value)} id="InputSearch" placeholder='Search Customer' aria-describedby="emailHelp"/> */}
                      <button type="button" class="btn btn-success mx-2"  onClick={exportToPDF}>Download PDF</button>
                      </>
                    }
                    >
                    </DataTable>
}
                    </>
            }
    

    



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

<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">PDF</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
 <h1>Hello PDF</h1>
      </div>
      {/* <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div> */}
    </div>
  </div>
</div>
{/* .......................................................... */}

            </>
  )
}

export default Datatable