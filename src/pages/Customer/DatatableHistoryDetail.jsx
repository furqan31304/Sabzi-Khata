import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import avatar from"../../avatars/avatar-2.jpg";
import { Link } from 'react-router-dom';
import Datatable from './Datatable';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';



    //   Modal.setAppElement('#yourAppElement');
function DatatableHistoryDetail() {
  const history_detail=useSelector((state)=>state.customerReducer.customer_history_details.data)
  const loading=useSelector((state)=>state.customerReducer.customer_history_details.loading)
  
  const [datum, setDatum] = useState()
useEffect(() => {
  if(history_detail!==null)
  {
    setDatum(history_detail)
  }
}, [history_detail])

    // Other functions
    const [search, setSearch] = useState("");
    const [filter,setFilter]=useState([]);
    useEffect(() => {
        const result=data.filter(cus=>{
          return (cus.product.toLowerCase().match(search.toLowerCase()))
        })
        if(search===""){
          setFilter(data)
          }else if(search!==""){
        setFilter(result);
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
            name: 'Date',
            selector: row => <div style={{fontSize:"18px"}}>{row.created_on}</div>,
            sortable:"true",
        },
        {
            name: 'Product',
            selector: row => <div style={{fontSize:"18px"}}>{row.label}</div>,
            sortable:"true",
        },
        
        {
            name: 'Quantity',
            selector: row => <div style={{fontSize:"18px"}}>{row.quantity}</div>,
            width:"auto",
            sortable:"true"
        },
        {
            name: 'Price',
            selector: row => <div style={{fontSize:"18px"}}>{row.price}</div>,
            width:"auto",
            sortable:"true"
        },
        
    ];
    
    const data = [
        {
            product:"Banana",
            qty:"123",
          date:"12/1/2022",
          amount:"500000"
        },
        {
            product:"Banana",
            qty:"123",
          date:"2/2/2022",
          amount:"4000"
        },
        {
            product:"Banana",
            qty:"123",
          date:"12/3/2022",
          amount:"500"
        },
        {
            product:"Banana",
            qty:"123",
          date:"13/4/2022",
          amount:"3100120"
        },
        {
            product:"Banana",
            qty:"123",
          date:"9/5/2022",
          amount:"543290"
        },
        {
            product:"Banana",
            qty:"123",
          date:"10/6/2022",
          amount:"43210"
        },
        {
            product:"Banana",
            qty:"123",
          date:"25/7/2022",
          amount:"36070"
        },
    ]
  return (
    
    <>
    {
      loading?
      <div className='d-flex justify-content-center align-item-center'>
    <Loader/>
    </div>:
      <DataTable
      pagination={true}
      columns={columns}
      customStyles={myNewTheme}
      data={datum}
      // subHeader
      //         subHeaderComponent={<>
      //           <input type="text" className="form-control w-25" value={search} onChange={(e)=>setSearch(e.target.value)} id="InputSearch" placeholder='Search Customer' aria-describedby="emailHelp"/>
  
      //           </>
              >
              </DataTable>
    }

  


{/* .............................................................................................. */}
                                    {/* Edit Customer Modal */}
            
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog  modal-xl modal-dialog-centered">
    <div className="modal-content ">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Edit Customer Details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='container-fluid'>
        <Datatable/>
        </div>
 
      </div>
      
    </div>
  </div>
</div>
{/* ............................................................... */}


{/* .............................................................................................. */}
                                    {/* Add New Customer Modal */}
            
                                    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Add New Customer</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="col-12">
     
  </div>
      <form className="row g-3">
        
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Name <span style={{color:"red"}}>*</span></label>
    <input type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Phone No <span style={{color:"red"}}>*</span></label>
    <input type="number" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Sadiqabad"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Total Amount</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary w-100">Sign in</button>
  </div>
</form>
      </div>
      {/* <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div> */}
    </div>
  </div>
</div>
{/* ............................................................... */}


{/* ............................................................... */}
{/* Payment Add Modal */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Payment Recovery</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-12">
    <label for="validationCustom01" className="form-label">Total Amount</label>
    <input type="text" className="form-control" id="validationCustom01" value="12" disabled required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-12">
    <label for="validationCustom02" className="form-label">Pay Amount</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>  
  
</form>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-success col-md-12">Done</button>
      <button type="button" className="btn btn-light col-md-12" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
{/* .......................................................... */}

            </>
  )
}

export default DatatableHistoryDetail