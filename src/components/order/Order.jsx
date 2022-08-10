import React from 'react';
import OrderBy from './Select.jsx';
import CreatableSingle from './Select2.tsx';
import { NavLink } from 'react-router-dom';



const Order = () => {
  return (
  <div>
    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">

          <div className="row">
						<div className="col-sm-6 mb-4 mb-xl-0">
							<div className="d-lg-flex align-items-center ml-3">
								<div>
									<h3 className="text-dark font-weight-bold mb-2">Manage all Orders here!</h3>
									<h6 className="font-weight-normal mb-2">Manage all selling orders of all types</h6>
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
										<NavLink className="btn btn-primary btn-md btn-icon-text" exact to="/order/neworder">
											<i className="mdi mdi-cube-send mdi-18px btn-icon-prepend"></i>  Add New Order                        
										</NavLink>
								</div>
							</div>
						</div>
					</div>
          <div className='container-fluid'>
            <div className="mt-4 col-md-12 grid-margin stretch-card ">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-2">Order Details</h4>
                  <p className="card-description">
                    Please enter all details about order.
                  </p>
                  <div className='mt-5'>
                    
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

export default Order;
