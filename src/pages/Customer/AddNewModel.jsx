import React from 'react'

const AddNewModel = () => {
  return (
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel">Add New Customer</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="col-12">
       
    </div>
        <form class="row g-3">
          <div className='col-12 d-flex justify-content-center'>
          <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="img-thumbnail" style={{width:"128px",borderRadius:"100%"}} alt="..."/>
          </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Name <span style={{color:"red"}}>*</span></label>
      <input type="text" class="form-control" id="inputEmail4"/>
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Phone No <span style={{color:"red"}}>*</span></label>
      <input type="number" class="form-control" id="inputPassword4"/>
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Sadiqabad"/>
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Total Amount</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Done</button>
    </div>
  </form>
        </div>
        {/* <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default AddNewModel