import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../components/Loader';
import { forgetPass } from '../../Redux/auth/action';
import { useNavigate } from 'react-router-dom';
function Forget() {
	
	const loading=useSelector((state)=>state.authReducer.forget.loading)
	const status=useSelector((state)=>state.authReducer.forget.status)
	const message=useSelector((state)=>state.authReducer.forget.message)
	const error=useSelector((state)=>state.authReducer.forget.error)


	const navigate=useNavigate()
	const dispatch=useDispatch();
    const [data, setData] = useState({
        user_name:"",
        password:"",
		cpassword:""
    })
	// const response=useSelector((state)=>state.authReducer.forget.message)
	// useEffect(() => {
		
	// }, [response]);
    const handleInput=(e)=>{
        console.log(data)
        setData({...data,[e.target.name]:e.target.value})
        
       }
       const submitData=(e)=>{
        e.preventDefault();
        console.log(data)
        dispatch(forgetPass(data));
	   }

	   useEffect(() => {
		
		if (error !== null && error!=="") {
		  setTimeout(() => {
			toast.error(error, {
				position: toast.POSITION.TOP_CENTER
			});
			// toast.error(error);
		  }, 200);
		  // dispatch(clearError());
		}
		if(status){
			if (message !== null) {
				setTimeout(() => {
				  toast.success(message, {
					  position: toast.POSITION.TOP_CENTER
				  });
				  // toast.error(error);
				}, 200);
				setTimeout(() => {
					navigate(`/`);
				  }, 3000);
				// dispatch(clearError());
			  }
		}
		else if (message !== null) {
			setTimeout(() => {
			  toast.error(message, {
				  position: toast.POSITION.TOP_CENTER
			  });
			  // toast.error(error);
			}, 200);
			// dispatch(clearError());
		  }
		
	  }, [status,error,message]);
  return (
    <main className="d-flex w-100 ">
		<div className="container d-flex flex-column">
			<div className="row vh-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">
						{loading?<div className='text-center'><Loader/></div>:
						<>
						<div className="text-center mt-4">
							<h1 className="h2">Forget Your Password ☹</h1>
							<p className="lead">
								Don't Worry, Please Enter the Require Data
							</p>
						</div>

						<div className="card" style={{borderRadius:'15px'}}>
							<div className="card-body">
								<div className="m-sm-4">
									
									<form onSubmit={submitData}>
										<div className="mb-3">
											<label className="form-label" htmlFor='username'>Username</label>
											<input className="form-control form-control-lg" autoComplete="off" type="text" name="user_name" placeholder="Enter username" onChange={handleInput} />
										</div>
										<div className="mb-3">
											<label className="form-label" htmlFor='password'>New Password</label>
											<input className="form-control form-control-lg" autoComplete="off" type="password" name="password" placeholder="Enter your new password" onChange={handleInput}/>
										</div>
										<div className="mb-3">
											<label className="form-label" htmlFor='cpassword'>Confirm Password</label>
											<input className="form-control form-control-lg" autoComplete="off" type="password" name="cpassword" placeholder="Enter your confirm Password" onChange={handleInput} />
										</div>
										<div className="text-center mt-3">
											{/* <a href="index.html" className="btn btn-lg btn-primary">Done</a> */}
										<button type="submit" className="btn btn-lg btn-primary w-100">Done</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						</>}
						

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

export default Forget