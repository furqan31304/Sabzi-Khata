import React, { useEffect, useState } from 'react'
import  {} from"feather-icons"
import {bell} from '../avatars/bell.svg'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import avatar from "../avatars/profile.png"
import { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sidebartoggle } from '../Redux/sidebartoggle/action'
import {logOut} from '../Redux/auth/action'
import userReducer from '../Redux/userdata/reducer'
function Navbar({props}) {
	let id=localStorage.getItem('authToken');
	let name=   localStorage.getItem('name');
	let  img=    localStorage.getItem('image');
	let    is_subadmin=  localStorage.getItem('subadmin');
	const [collapsed, setCollapsed] = useState("collapsed");
	const dispatch=useDispatch();	
	const navigate = useNavigate();
	const logout=()=>{
		dispatch(logOut())
		navigate(`/`);
	}
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
				<NavLink className="sidebar-toggle js-sidebar-toggle" onClick={()=>dispatch(sidebartoggle(collapsed),collapsed==="collapsed"?setCollapsed(""):setCollapsed("collapsed"))}>
          <i className="hamburger align-self-center"></i>
        </NavLink>

				<div className="navbar-collapse collapse">
					<ul className="navbar-nav navbar-align">
						{/* <li className="nav-item dropdown">
							<NavLink className="nav-icon dropdown-toggle" to="/" id="alertsDropdown" data-bs-toggle="dropdown">
								<div className="position-relative">
									<i className="align-middle" data-feather="bell"></i>
                            
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
									<span className="indicator">4</span>
								</div>
							</NavLink>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
								<div className="dropdown-menu-header">
									4 New Notifications
								</div>
								<div className="list-group">
									<NavLink to="/" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
											</div>
											<div className="col-10">
												<div className="text-dark">Update completed</div>
												<div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
												<div className="text-muted small mt-1">30m ago</div>
											</div>
										</div>
									</NavLink>
									<NavLink to="/" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
											</div>
											<div className="col-10">
												<div className="text-dark">Lorem ipsum</div>
												<div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
												<div className="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</NavLink>
									<NavLink to="/" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<i className="text-primary" data-feather="home"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">Login from 192.186.1.8</div>
												<div className="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</NavLink>
									<NavLink to="/" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<i className="text-success" data-feather="user-plus"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">New connection</div>
												<div className="text-muted small mt-1">Christina accepted your request.</div>
												<div className="text-muted small mt-1">14h ago</div>
											</div>
										</div>
									</NavLink>
								</div>
								<div className="dropdown-menu-footer">
									<NavLink to="/" className="text-muted">Show all notifications</NavLink>
								</div>
							</div>
						</li> */}
						{/* <li className="nav-item dropdown">
							<NavLink className="nav-icon dropdown-toggle" to="/" id="messagesDropdown" data-bs-toggle="dropdown">
								<div className="position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
								</div>
							</NavLink>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
								<div className="dropdown-menu-header">
									<div className="position-relative">
										4 New Messages
									</div>
								</div>
								<div className="list-group">
									<NavLink to="/" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<img src='adminkit/img/avatars/avatar-5.jpg' className="avatar img-fluid rounded-circle" alt="Vanessa Tucker"/>
											</div>
											<div className="col-10 ps-2">
												<div className="text-dark">Vanessa Tucker</div>
												<div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
												<div className="text-muted small mt-1">15m ago</div>
											</div>
										</div>
									</NavLink>
									<NavLink to="/" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<img src="adminkit/img/avatars/avatar-2.jp" className="avatar img-fluid rounded-circle" alt="William Harris"/>
											</div>
											<div className="col-10 ps-2">
												<div className="text-dark">William Harris</div>
												<div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
												<div className="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</NavLink>
									<NavLink to="/" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<img src="adminkit/img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason"/>
											</div>
											<div className="col-10 ps-2">
												<div className="text-dark">Christina Mason</div>
												<div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
												<div className="text-muted small mt-1">4h ago</div>
											</div>
										</div>
									</NavLink>
									<NavLink to="/" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<img src="adminkit/img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman"/>
											</div>
											<div className="col-10 ps-2">
												<div className="text-dark">Sharon Lessman</div>
												<div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
												<div className="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</NavLink>
								</div>
								<div className="dropdown-menu-footer">
									<NavLink to="/" className="text-muted">Show all messages</NavLink>
								</div>
							</div>
						</li> */}
						<li className="nav-item dropdown">
							<div className="nav-link dropdown-toggle d-none d-sm-inline-block" to="/" data-bs-toggle="dropdown">
                <img src={avatar} className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">{name}</span>
              </div>
							<div className="dropdown-menu dropdown-menu-end">
								
								<Link className="dropdown-item"  onClick={logout}>Log out</Link>
							</div>
						</li>
						<li>
						{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Muhammad Furqan
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> */}
						</li>
					</ul>
				</div>
			</nav>
  )
}

export default Navbar