import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userData } from '../Redux/userdata/action'
function Sidebar(props) {
	
	const stt=useSelector((state)=>state.sidebarReducer.state)
	const admin_data=useSelector((state)=>state.userReducer.data)
	console.log('Data in Side Bar',admin_data)
	localStorage.setItem('role',admin_data)
	const dispatch=useDispatch()
	useEffect(() => {
	  if(admin_data===null){
		dispatch(userData({id:localStorage.getItem('authToken'),is_subadmin:localStorage.getItem('subadmin')}))
	  }
	}, [admin_data])
	
  return (
    <nav id="sidebar" className={`sidebar js-sidebar ${stt}`}>
			<div className="sidebarcontent js-simplebar">
				<NavLink className="sidebar-brand" to="/">
          <span className="align-middle">SABZI KHATA</span>
        </NavLink>
				<ul className="sidebar-nav">
					<li className="sidebar-header">
						Pages
					</li>
					{admin_data?.dashboard==='1'&&
					<NavLink className="sidebar-item " to="/layout/main">
					<div className="sidebar-link">
					<i class="fa fa-home align-middle" aria-hidden="true"></i> <span className="align-middle" >Dashboard</span>
		</div>
				</NavLink>}
					
					{admin_data?.customer==='1'&&
					<NavLink className="sidebar-item" to="/layout/customer">
						<NavLink className="sidebar-link" to="/layout/customer">
						<i class="fa fa-users align-middle" aria-hidden="true"></i> <span className="align-middle">Customer</span>
            </NavLink>
					</NavLink>}
					{admin_data?.supplier==="1"&&<NavLink className="sidebar-item" to="/layout/supplier">
						<div className="sidebar-link" >
						<i class="fa fa-user " aria-hidden="true"></i>
 <span className="align-middle">Supplier</span>
            </div>
					</NavLink>}
					{admin_data?.pos==='1'&&
					<NavLink className="sidebar-item" to="/layout/pos">
						<NavLink className="sidebar-link"  to="/layout/pos">
						<i class="fa fa-plus-square" aria-hidden="true"></i> <span className="align-middle">Add Sale</span>
            </NavLink>
					</NavLink>}
					{admin_data?.pos==='1'&&
					<NavLink className="sidebar-item" to="/layout/possupplier">
						<NavLink className="sidebar-link"  to="/layout/possupplier">
						<i class="fa fa-minus-square" aria-hidden="true"></i> <span className="align-middle">Add Purchase</span>
            </NavLink>
					</NavLink>}
					{ admin_data?.products==='1'&&
					<NavLink className="sidebar-item" to="/layout/product">
						<NavLink className="sidebar-link" to="/layout/product">
						<i class="fa fa-shopping-bag" aria-hidden="true"></i> <span className="align-middle">Products</span>
            </NavLink>
					</NavLink>
}
					{admin_data?.report==='1'&&
					<NavLink className="sidebar-item" to="/layout/customerReport">
					<NavLink className="sidebar-link" to="/layout/customerReport">
					<i class="fa fa-line-chart" aria-hidden="true"></i> <span className="align-middle">Customer Report</span>
		</NavLink>
				</NavLink>}
				{admin_data?.report==='1'&&
					<NavLink className="sidebar-item" to="/layout/supplierReport">
					<NavLink className="sidebar-link" to="/layout/supplierReport">
					<i class="fa fa-line-chart" aria-hidden="true"></i> <span className="align-middle">Supplier Report</span>
		</NavLink>
				</NavLink>}
				{/* {admin_data?.user_management&&
					<li className="sidebar-item">
						<NavLink className="sidebar-link" to="ui-buttons.html">
						<i class="fa fa-male" aria-hidden="true"></i> <span className="align-middle">Staff</span>
            </NavLink>
					</li>
} */}
					

					{/* <li className="sidebar-header">
						Settings
					</li>

					<li className="sidebar-item">
						<NavLink className="sidebar-link" to="charts-chartjs.html">
              <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">Charts</span>
            </NavLink>
					</li>

					<li className="sidebar-item">
						<NavLink className="sidebar-link" to="maps-google.html">
              <i className="align-middle" data-feather="map"></i> <span className="align-middle">Maps</span>
            </NavLink>
					</li> */}
				</ul>

				
			</div>
		</nav>
  )
}

export default Sidebar