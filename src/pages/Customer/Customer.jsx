import React from 'react'
import Datatable from './Datatable'
function Customer() {
  return (
    <main className="content">
    <div className="container-fluid p-0" >
        <h1 className="h3 mb-3"><strong>Customer</strong>Listing</h1>

        <div className="row">
            <div className="col-xl-12 col-xxl-12 d-flex" >
                <div className="w-100">
                    <div className="row" >
                        <div >
                        <Datatable/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default Customer