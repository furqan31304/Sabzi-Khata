import React,{useState} from 'react'
import Main from './components/Main';

import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import UserProfile from './pages/UserProfile';
import Customer from './pages/Customer/Customer';
import Product from './pages/Product/Product';
import Pos2 from './pages/POSSupplier/PosSupplier';
import Pos from './pages/POS/Pos';
import Forget from './pages/Auth/Forget';
import CustomerDetails from './pages/Customer/CustomerDetails';
import { useSelector } from 'react-redux';
import Supplier from './pages/Supplier/Supplier';
import SupplierDetails from './pages/Supplier/SupplierDetails';
import CustomerReport from './pages/Reports/CustomerReport';
import SupplierReport from './pages/Reports/SupplierReport';
function App() {
  const [navToggle, setNavToggle] = useState("");
  function toogleSidebar(status){
    return(
      setNavToggle(status)
    )
  }
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/layout' element={<Layout/>}>
    <Route path='main' element={<Main/>}/>
    <Route path='profile' element={<UserProfile/>}/>
    <Route path='supplier' element={<Supplier/>}/>
    <Route path='supplier/supplierdetials' element={<SupplierDetails/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='pos' element={<Pos/>}/>
    <Route path='possupplier' element={<Pos2/>}/>
    <Route path='customerReport' element={<CustomerReport/>}/>
    <Route path='supplierReport' element={<SupplierReport/>}/>
    <Route path='customer' element={<Customer/>}/>
    <Route path='customer/customerdetials' element={<CustomerDetails/>}/>
    </Route>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/forget' element={<Forget/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App