import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Layout() {
  const navigate=useNavigate()
  // const isAuthorized=useSelector((state)=>state.authReducer.isAuthenticated)
  const isAuthorized=localStorage.getItem('authToken')
    const [side, setSide] = useState("ltr");
    
      if(isAuthorized && side==="ltr"){
        return (
          <div className="wrapper">
            <Sidebar/>
            <div className="main">
              <Navbar/>
              <Outlet/>
              {/* <Footer /> */}
            </div>
            
          </div>
        )
          }
          else if(isAuthorized){
              return (
                  <div className="wrapper">
                    <div className="main">
                      <Navbar/>
                      <Outlet/>
                      <Footer/>
                    </div>
                    <Sidebar />
                  </div>
                )
      
          }
    else{
      return(
        <Navigate to='/'/>||<Navigate to='/signup'/>
      )
    }
    
}

export default Layout