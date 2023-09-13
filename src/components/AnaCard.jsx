import React from 'react'
import { useSelector } from 'react-redux'
import LoaderMini from './LoaderMini'

function AnaCard(props) {
    const loading1=useSelector((state)=>state.dashboardReducer.customer_dashboard.loading)
    const loading2=useSelector((state)=>state.dashboardReducer.supplier_dashboard.loading)
  return (
    <div className='col-sm-6'  >
    <div className="card" style={{borderRadius:'15px',backgroundColor:props.color, border:"none"}}>
        <div className="card-body">
            <div className="row">
                <div className="col mt-0">
                    <h5 className="card-title text-white">{props.title}</h5>
                </div>
                {/* <div className="col-auto">
                    <div className="stat text-primary">
                        <i className="align-middle" data-feather="truck"></i>
                    </div>
                </div> */}
            </div>
            {
                loading1||loading2?<LoaderMini/>:<h1 className="mt-1 mb-3 text-white">{props.pop}</h1>
            }
            
            {/* <div className="mb-0">
                <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                <span className="text-muted">Since last week</span>
            </div> */}
        </div>
    </div>
</div>
  )
}

export default AnaCard