import React from 'react';
import { NavLink } from 'react-router-dom';

const Dispatch = () => {
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
									<h3 className="text-dark font-weight-bold mb-2">Items ready for dispatch</h3>
									<h6 className="font-weight-normal mb-2"></h6>
								</div>
								<div className="ml-lg-5 d-lg-flex d-none">
										<div className='h3 text-bold'>
                        21
                    </div>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="d-flex align-items-center justify-content-md-end">
								<div className="pr-1 mb-3 mb-xl-0 row text-center">
										<NavLink className="btn btn-primary btn-md btn-icon-text" exact to="/order/#">
											<i className="mdi mdi-cube-send mdi-18px btn-icon-prepend"></i>  Generate Gate Pass                       
										</NavLink>
								</div>
							</div>
						</div>
					</div>
          <div className='container-fluid'>
            <div className="mt-4 col-md-12 grid-margin stretch-card ">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-2">Ready for delivery</h4>
                  <p className="card-description">
                    Move forward!
                  </p>
                  <div className='mt-3'>
                    <div className='row'>
                      <div className='col-4'>
                        name of item
                      </div>
                      <div className='col-4'>
                        status
                      </div>
                      <div className='col-4'>
                        action
                      </div>
                    </div>
                  
                    <div className='row'>
                      <div className='col-4'>
                        name of item
                      </div>
                      <div className='col-4'>
                        status
                      </div>
                      <div className='col-4'>
                        action
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='container-fluid'>
            <div className="mt-4 col-md-12 grid-margin stretch-card ">
              <div className="card">
                <div className="card-body">
                  <div className='row'>
                    <div className='col-sm-10'>
                      <h4 className="card-title mb-2">Genrated gate pass</h4>
                      <p className="card-description">
                        mark if order is succefully deliverd!
                      </p>
                    </div>
                    <div className='col-sm-2 text-right'>
                      <button className='btn btn-warning'>Edit</button>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <div className='row'>
                      <div className='col-4'>
                        name of item
                      </div>
                      <div className='col-4'>
                        status
                      </div>
                      <div className='col-4'>
                        action
                      </div>
                    </div>
                  
                    <div className='row'>
                      <div className='col-4'>
                        name of item
                      </div>
                      <div className='col-4'>
                        status
                      </div>
                      <div className='col-4'>
                        action
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
    </div>
  </div>
  );
}

export default Dispatch;