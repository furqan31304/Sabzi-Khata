import React, { useEffect, useState } from 'react'
import AnaCard from './AnaCard'
import { useDispatch, useSelector } from 'react-redux'
import { customerDashboard, supplierDashboard } from '../Redux/dashboard/action'

function Main() {
    const admin_id=localStorage.getItem('authToken')
    const customer_dash=useSelector((state)=>state.dashboardReducer.customer_dashboard.data)
    const supplier_dash=useSelector((state)=>state.dashboardReducer.supplier_dashboard.data)
    const dispatch=useDispatch()
    const [customerArr, setCustomerArr] = useState([])
    const [supplierArr, setSupplierArr] = useState([])
    
    useEffect(() => {
      if(customer_dash===null){
        dispatch(customerDashboard({admin_id}))
        dispatch(supplierDashboard({admin_id}))
        
      }
      else {
        const arrayOfObjects = customer_dash?.map(item => {
            return item[0];
          });
          const arrayOfObjects2 = supplier_dash?.map(item => {
            return item[0];
          });
          setCustomerArr(arrayOfObjects)
          setSupplierArr(arrayOfObjects2)
          console.log(arrayOfObjects);
          console.log(arrayOfObjects2);
      }
    }, [customer_dash,supplier_dash])
    //   useEffect(() => {
    //     if(supplier_dash===null){
    //       dispatch(supplierDashboard({admin_id}))
          
    //     }
    //     else {
            
    //       const arrayOfObjects2 = supplier_dash?.map(item => {
    //           return item[0];
    //         });
    //         setSupplierArr(arrayOfObjects2)
    //         console.log("supplierArr",supplierArr)
    //         // console.log("supplierArr: ",supplierArr)
    //     }
    //   }, [supplier_dash])

    
  return (
    <main className="content">
    <div className="container-fluid p-0">

        <h1 className="h5 mb-3"><strong>Analytics</strong> Customer</h1>

        <div className="row">
            <div className="col-xl-12 col-xxl-12 d-flex">
                <div className="w-100">
                    <div className="row">
                     <AnaCard pop={customerArr?.map((e)=>e.total_amount===null?'0':e.total_amount)} color="#FF8B00" title='Total Amount'/>
                     <AnaCard pop={customerArr?.map((e)=>e.total_customer===null?'0':e.total_customer)} color="#76D136" title='Total Customers'/>
                     <AnaCard pop={customerArr?.map((e)=>e.new_amount===null?'0':e.new_amount)} color="#FD3F46" title='Today Sale'/>
                     <AnaCard pop={customerArr?.map((e)=>e.total_payAmount===null?'0':e.total_payAmount)} color="#F5BD0A" title='Amount Recieved'/>
                      {/* <AnaCard pop={customer_dash[2][0].total_customer} title='Total Customers'/>
                      <AnaCard pop={customer_dash[1][0].new_amount} title='New Amount'/>
                      <AnaCard pop={customer_dash[3][0].total_payAmount} title='Pay Amount'/> */}
                    </div>
                </div>
            </div>

            {/* <div className="col-xl-6 col-xxl-7">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Recent Movement</h5>
                    </div>
                    <div className="card-body py-3">
                        <div className="chart chart-sm">
                            <canvas id="chartjs-dashboard-line"></canvas>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

        <h1 className="h5 mb-3"><strong>Analytics</strong> Supplier</h1>

        <div className="row">
            <div className="col-xl-12 col-xxl-12 d-flex">
                <div className="w-100">
                    <div className="row">
                     <AnaCard pop={supplierArr?.map((e)=>e.total_amount===null?'0':e.total_amount)} color="#FF7070" title='Total Amount'/>
                     <AnaCard pop={supplierArr?.map((e)=>e.total_customer===null?'0':e.total_customer)} color='#95FF66' title='Total Suppliers'/>
                     <AnaCard pop={supplierArr?.map((e)=>e.new_amount===null?'0':e.new_amount)} color='#6939BD' title='Total Sale'/>
                     <AnaCard pop={supplierArr?.map((e)=>e.total_payAmount===null?'0':e.total_payAmount)}  color='#38C5C9'title='Amount Paid'/>
                      {/* <AnaCard pop={customer_dash[2][0].total_customer} title='Total Customers'/>
                      <AnaCard pop={customer_dash[1][0].new_amount} title='New Amount'/>
                      <AnaCard pop={customer_dash[3][0].total_payAmount} title='Pay Amount'/> */}
                    </div>
                </div>
            </div>

            {/* <div className="col-xl-6 col-xxl-7">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Recent Movement</h5>
                    </div>
                    <div className="card-body py-3">
                        <div className="chart chart-sm">
                            <canvas id="chartjs-dashboard-line"></canvas>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

        {/* <div className="row">
            <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Browser Usage</h5>
                    </div>
                    <div className="card-body d-flex">
                        <div className="align-self-center w-100">
                            <div className="py-3">
                                <div className="chart chart-xs">
                                    <canvas id="chartjs-dashboard-pie"></canvas>
                                </div>
                            </div>

                            <table className="table mb-0">
                                <tbody>
                                    <tr>
                                        <td>Chrome</td>
                                        <td className="text-end">4306</td>
                                    </tr>
                                    <tr>
                                        <td>Firefox</td>
                                        <td className="text-end">3801</td>
                                    </tr>
                                    <tr>
                                        <td>IE</td>
                                        <td className="text-end">1689</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Real-Time</h5>
                    </div>
                    <div className="card-body px-4">
                        <div id="world_map" style={{height:"350px"}}></div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
                <div className="card flex-fill">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Calendar</h5>
                    </div>
                    <div className="card-body d-flex">
                        <div className="align-self-center w-100">
                            <div className="chart">
                                <div id="datetimepicker-dashboard"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <div className="row">
            <div className="col-12 col-lg-8 col-xxl-9 d-flex">
                <div className="card flex-fill">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Latest Projects</h5>
                    </div>
                    <table className="table table-hover my-0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className="d-none d-xl-table-cell">Start Date</th>
                                <th className="d-none d-xl-table-cell">End Date</th>
                                <th>Status</th>
                                <th className="d-none d-md-table-cell">Assignee</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Project Apollo</td>
                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                            </tr>
                            <tr>
                                <td>Project Fireball</td>
                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                <td><span className="badge bg-danger">Cancelled</span></td>
                                <td className="d-none d-md-table-cell">William Harris</td>
                            </tr>
                            <tr>
                                <td>Project Hades</td>
                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">Sharon Lessman</td>
                            </tr>
                            <tr>
                                <td>Project Nitro</td>
                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                <td><span className="badge bg-warning">In progress</span></td>
                                <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                            </tr>
                            <tr>
                                <td>Project Phoenix</td>
                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">William Harris</td>
                            </tr>
                            <tr>
                                <td>Project X</td>
                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">Sharon Lessman</td>
                            </tr>
                            <tr>
                                <td>Project Romeo</td>
                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                <td><span className="badge bg-success">Done</span></td>
                                <td className="d-none d-md-table-cell">Christina Mason</td>
                            </tr>
                            <tr>
                                <td>Project Wombat</td>
                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                <td><span className="badge bg-warning">In progress</span></td>
                                <td className="d-none d-md-table-cell">William Harris</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-xxl-3 d-flex">
                <div className="card flex-fill w-100">
                    <div className="card-header">

                        <h5 className="card-title mb-0">Monthly Sales</h5>
                    </div>
                    <div className="card-body d-flex w-100">
                        <div className="align-self-center chart chart-lg">
                            <canvas id="chartjs-dashboard-bar"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    </div>
</main>
  )
}

export default Main