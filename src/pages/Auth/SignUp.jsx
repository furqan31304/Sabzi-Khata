import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../Redux/auth/action'
import { toast } from 'react-toastify';
function SignUp() {
	const isAuthorized = useSelector((state) => state.authReducer.signup.isAuthenticated);
  const errors = useSelector((state) => state.authReducer.signup.error);
  const status = useSelector((state) => state.authReducer.signup.status);
  const message = useSelector((state) => state.authReducer.signup.message);
  const loading = useSelector((state) => state.authReducer.signup.loading);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(() => {
    console.log(isAuthorized);
    if(isAuthorized && status){
		setTimeout(() => {
			navigate(`/layout/main`);
		  }, 1000);
      
    }
    if (errors !== null) {
      setTimeout(() => {
		toast.error(errors, {
            position: toast.POSITION.TOP_CENTER
        });
        // toast.error(error);
      }, 200);
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
  }, [isAuthorized,errors,message,status]);
	const history=useNavigate()
   
    const [data, setData] = useState({
        full_name:"",
        user_name:"",
        password:""
    })
    const handleInput=(e)=>{
        console.log(data)
        setData({...data,[e.target.name]:e.target.value})
        
       }
       const submitData=(e)=>{
        e.preventDefault();
        console.log(data)
        dispatch(signUpUser(data));
       }
  return (
    <main className="d-flex w-100">
		<div className="container d-flex flex-column">
			<div className="row vh-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Welcome to Sabzi Khata</h1>
							<p className="lead">
								Create Account and Manage Your Shop Data
							</p>
						</div>

						<div className="card" style={{borderRadius:'15px'}}>
							<div className="card-body">
								<div className="m-sm-4">
									<form onSubmit={submitData}>
										<div className="mb-3">
											<label className="form-label">Full Name</label>
											<input className="form-control form-control-lg" type="text" name="full_name" placeholder="Enter your name" onChange={handleInput} />
										</div>
										{/* <div className="mb-3">
											<label className="form-label">Company</label>
											<input className="form-control form-control-lg" type="text" name="company" placeholder="Enter your company name" />
										</div> */}
										<div className="mb-3">
											<label className="form-label">User Name</label>
											<input className="form-control form-control-lg" type="text" name="user_name"  placeholder="Enter username" onChange={handleInput} />
										</div>
										<div className="mb-3">
											<label className="form-label">Password</label>
											<input className="form-control form-control-lg" type="password" name="password" placeholder="Enter password" onChange={handleInput} />
										</div>
										<div className="text-center mt-3">
											{/* <a href="index.html" className="btn btn-lg btn-primary">Sign up</a> */}
											<button type="submit" className="btn btn-lg btn-primary w-100">Sign up</button>
										</div>
										<div className="text-center mt-3">
											<h5>or</h5>
										</div>
										<div className="text-center mt-3">
											{/* <a href="index.html" className="btn btn-lg btn-primary">Sign in</a> */}
											 <button type="button" className="btn btn-lg btn-light w-100" onClick={()=>history('/')}>Already Have an Account</button>
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</main>
  )
}

export default SignUp