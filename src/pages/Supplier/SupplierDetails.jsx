import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import img from '../../avatars/profile.png';
import Datatable from './Datatable';
import DatatableHistory from './DatatableHistory';
import { useDispatch, useSelector } from 'react-redux';
import { supplierHistory } from '../../Redux/supplier/action';

const SupplierDetails = () => {
const [userData, setUserData] = useState()
const location=useLocation();
  useEffect(() => {
    let data = location.state.data;
    console.log("supplier details",data);
    // localStorage.setItem('customer_id',data.customer_id)
    setUserData(data);
    
}, [])



  return (
    <main className='content'>
    <div className='container-fluid p-0'>
      <h1 className='h3 mb-3'>
        <strong>Supplier </strong>Profile
      </h1>
<div className='row'>
      <div className='col-sm bg-white p-5 my-2 col-lg-5 col-xl-3 col-md-5  col-sm ' style={{borderRadius:"15px"}}>
        <div className='col-xl-12 col-xxl-12 d-flex'>
          <div className='w-100'>
          <div className="row">
      <div className='col-sm col col-lg'>
        <div className=" row">
            <img className=' rounded-circle border-lg'src={img} alt="" />
        </div>
      </div>
    </div>
   
          </div>
        </div>
      </div>
      <div className='col-sm bg-white pt-3 col-lg-6 col-xl-8 col-md-6 col-sm my-2 mx-2' style={{borderRadius:"15px"}}>
        <div className='col d-flex m-1 '>
          <div className='w-100'>
          <div className="row">
      <div className='col mx-2'>
      <div className="row my-2">
            <div className="col">Acc No:</div>
            <div className="col">{userData?.supplier_id}</div>
        </div>
        <div>
            <hr />
        </div>
        <div className="row my-2">
            <div className="col">Supplier Name:</div>
            <div className="col">{userData?.name}</div>
        </div>
        <div>
            <hr />
        </div>
        <div className="row my-2">
            <div className="col">Phone No:</div>
            <div className="col">{userData?.phone}</div>
        </div>
        <div>
            <hr />
        </div>
        <div className="row my-2">
            <div className="col">Address:</div>
            <div className="col">{userData?.address}</div>
        </div>
      </div>
    </div>
   
          </div>
        </div>
      </div>
      </div>
      {/* Here add second row */}

      <div className='row'>
      <h4 className='h4 mb-2 mt-2'>
        <strong>Supplier </strong>History
      </h4>
      <div className='col-sm bg-white pt-3 col-lg-9 col-xl-11 col-md-9 col-sm' style={{borderRadius:"15px"}}>
        <div className='col d-flex m-1 '>
          <div className='w-100'>
          <div className="row">
      <div className='col mx-2'>
      <DatatableHistory supplier_id={userData?.supplier_id}/>
      </div>
    </div>
   
          </div>
        </div>
      </div>
      </div>
    </div>
    <div></div>
    
  </main>
  )
}

export default SupplierDetails