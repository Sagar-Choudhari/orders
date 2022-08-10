import React, { Component } from 'react';
import OrderBy from '../Select.jsx';
import CreatableSingle from '../Select2.tsx';


const NewOrder = () => {
  return (
  <div>
    <div className="container page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">

          <div className="row">
						<div className="col-sm-6 mb-4 mb-xl-0">
							<div className="d-lg-flex align-items-center ml-3">
								<div>
									<h3 className="text-dark font-weight-bold mb-2">Add new Orders here!</h3>
									<h6 className="font-weight-normal mb-2">New confirm selling order of all types</h6>
								</div>
								<div className="ml-lg-5 d-lg-flex d-none">
										<button type="button" className="btn bg-white btn-icon">
											<i className="mdi mdi-view-grid text-success"></i>
									</button>
										<button type="button" className="btn bg-white btn-icon ml-2">
											<i className="mdi mdi-format-list-bulleted font-weight-bold text-primary"></i>
										</button>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="d-flex align-items-center justify-content-md-end">
								<div className="pr-1 mb-3 mb-xl-0 row text-center">
										<button className="btn btn-primary btn-md btn-icon-text">
											<i className="mdi mdi-cube-send mdi-18px btn-icon-prepend"></i>  Add New Order                        
										</button>
								</div>
							</div>
						</div>
					</div>
          <div className='container'>
            <div className="mt-4 col-md-12 grid-margin stretch-card ">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-2">Order Details</h4>
                  <p className="card-description">
                    Please enter all details about order.
                  </p>
                  <div className='mt-5'>
                    <form className="forms-sample">
                      <div className='row'>
                        <div className='form-group col-sm-6'>
                          <label for="orderby">Order By</label>
                          {/* <OrderBy /> */}
                          <CreatableSingle className="form-control form-control-sm border-secondary" noOptionsMessage={() => 'No options match'}/>
                        </div>
                        <div className='col-sm-2'></div>
                        <div className='form-group col-sm-4'>
                          <label for="date" className='text-left'> Date </label>
                          <input type='datetime-local' className="text-right form-control form-control-sm border-secondary" name='' />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='form-group col-sm-8'>
                          <label for="customer"> Customer </label>
                          {/* <input type="text" name="" className="form-control form-control-sm border-secondary" /> */}
                          <OrderBy/>
                        </div>
                        <div className='form-group col-sm-4'>
                          <label for="date" className='text-left'> Place </label>
                          <input type="text" className="text-right form-control form-control-sm border-secondary" name="place" />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='form-group col-sm-4'>
                          <label for="customer"> Order Details </label>
                          {/* <input type="text" name="" className="form-control form-control-sm border-secondary" /> */}
                          <textarea name="odd" className="form-control form-control-sm border-secondary" rows={"1"}></textarea>
                        </div>
                        <div className='form-group col-sm-4'>
                          <label for="date" className=''> Other Details </label>
                          {/* <input type="text" className=" form-control form-control-sm border-secondary" name="od" /> */}
                          <textarea name="odi" className="form-control form-control-sm border-secondary" rows={"1"}></textarea> 
                        </div>
                        <div className='form-group col-sm-4'>
                          <label for="date" className=''> Expected Delivery Date </label>
                          <input type="datetime-local" className="form-control form-control-sm border-secondary" name="datetime" />
                        </div>
                      </div>



                      <div className='' name="invoice-workplace">
                        <div className='border-secondary shadow-sm p-3 rounded'>
                          <div className='row'>
                            <div className='form-group col-2'>
                              <label for='iname'> Item Name </label>
                              <OrderBy className='form-control'/>
                            </div>
                            <div className='form-group col-2'>
                              <label for='iname'> Quantity </label>
                              <input className='form-control' />
                            </div>
                            <div className='form-group col-2'>
                              <label for='iname'> Rate </label>
                              <input className='form-control' />
                            </div>
                            <div className='form-group col-2'>
                              <label for='iname'> Colour </label>
                              <input className='form-control' />
                            </div>
                            <div className='form-group col-2'>
                              <label for='iname'> Remark </label>
                              <input className='form-control' />
                            </div>
                            <div className='form-group col-2'>
                              <label for='iname'> Remark </label>
                              <input className='form-control' />
                            </div>
                          </div>
                        </div>
                      </div>


                      
                      <div className='form-group'>
                        <label> Extra details :</label>
                        <textarea className="form-control form-control-sm border-secondary"></textarea>
                      </div>
                      
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-light">Clear All Field</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default NewOrder;
