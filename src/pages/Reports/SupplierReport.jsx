import React from 'react'
import Datatable2 from './DatatableSupplier'
import DatatableSupplier from './DatatableSupplier'
function SupplierReport() {
  return (
    <main className="content">
    <div className="container-fluid p-0" >
        <h1 className="h3 mb-3"><strong>Supplier Daily</strong>Report</h1>

        <div className="row">
            <div className="col-xl-12 col-xxl-12 d-flex" >
                <div className="w-100">
                    <div className="row" >
                        <div >
                        <DatatableSupplier/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default SupplierReport