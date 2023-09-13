import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../Redux/auth/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader';

function SignIn() {
	const isAuthorized = useSelector((state) => state.authReducer.login.isAuthenticated);
  const errors = useSelector((state) => state.authReducer.login.error);
  const message = useSelector((state) => state.authReducer.login.message);
  const loading = useSelector((state) => state.authReducer.login.loading);
  const navigate=useNavigate() 
  const dispatch=useDispatch()
  useEffect(() => {
    console.log(isAuthorized);
    if(isAuthorized){
		setTimeout(() => {
			navigate(`/layout/main`);
		  }, 1000);
    }
    if (errors !== null && errors !=='') {
      setTimeout(() => {
		toast.error(errors, {
            position: toast.POSITION.TOP_CENTER
        });
        // toast.error(error);
      }, 50);
      // dispatch(clearError());
    }
	if (message !== null) {
		setTimeout(() => {
		  toast.success(message, {
			  position: toast.POSITION.TOP_CENTER
		  });
		  // toast.error(error);
		}, 200);
		// dispatch(clearError());
	  }
  }, [isAuthorized,errors,message]);
  const [data, setData] = useState({
    user_name:"",
    password:""
  })
  const handleInput=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data)
   }
	
  return (
    <main className="d-flex w-100">
		<div className="container d-flex flex-column">
			
				
			<div className="row vh-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">
					<>
						<div className="text-center mt-4">
							<h1 className="h2">Welcome back, Shop Owner</h1>
							<p className="lead">
								Sign in to your account to continue
							</p>
						</div>
						<div className="card" style={{borderRadius:'15px'}}>
							<div className="card-body">
								<div className="m-sm-4">
									<div>
										<div className="mb-3">
											<label className="form-label">Username</label>
											<input className="form-control form-control-lg" type="text" id="user_name" name="user_name" onChange={handleInput} placeholder="Enter Username" value={data.user_name}/>
										</div>
										<div className="mb-3">
											<label className="form-label">Password</label>
											<input className="form-control form-control-lg" id="password" name="password" placeholder="Enter your password" onChange={handleInput} value={data.password}/>
											<small>
            <Link to="/forget" style={{textDecoration:"none"}} >Forgot password?</Link>
          </small>
										</div>
										{loading?<div className='text-center'><Loader/></div>:<>
										<div className="text-center mt-3">
											{/* <a href="index.html" className="btn btn-lg btn-primary">Sign in</a> */}
											 <button type="button" className="btn btn-lg btn-primary w-100" onClick={()=>dispatch(loginUser(data))}>Sign in</button>
										</div>
										<div className="text-center mt-3">
											<h5>or</h5>
										</div>
										<div className="text-center mt-3">
											{/* <a href="index.html" className="btn btn-lg btn-primary">Sign in</a> */}
											 <button type="button" className="btn btn-lg btn-light w-100" onClick={()=>navigate('/signup')}>Create Account</button>
										</div></>}
										
									</div>
								</div>
							</div>
						</div>
						</>

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
	</main>
  )
}

export default SignIn