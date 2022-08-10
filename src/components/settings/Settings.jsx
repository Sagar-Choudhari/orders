import React from 'react';
import { NavLink } from 'react-router-dom';

const Settings = () => {
  return (
  <div className='Settings'>
    <div className='content-wrapper'>
      <div className="row">
        <div className="col-sm-12 flex-column d-flex stretch-card">
          <div className="row">
            <div className="col-lg-3 d-flex grid-margin stretch-card">
              <div className="card bg-primary sale-visit-statistics-border">
                <div className="card-body text-white">
                  <NavLink to="/settings/profile" className="text-decoration-none">
                    <div className='row'>
                      <div className='col-8 text-left'>
                        <h2 className="text-white mb-2 font-weight-bold" style={{fontSize:"25px"}}> Profile </h2>
                        <h5 className="card-title mb-2 text-white h5 font-weight-normal" style={{fontSize:"16px"}}> View / Edit Profile </h5>
                      </div>
                      <div className='col-4 text-right text-center align-item-center'>
                        <i class="mdi mdi-account-box-outline font-weight-bold text-white icon-lg"></i>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex grid-margin stretch-card">
              <div className="card sale-diffrence-border">
                <div className="card-body">
                  <NavLink to="/settings/users" className="text-decoration-none">
                    <div className='row'>
                      <div className='col-8 text-left'>
                        <h2 className="text-dark mb-2 font-weight-bold" style={{fontSize:"25px"}}> Users </h2>
                        <h5 className="card-title mb-2 h5 font-weight-normal" style={{fontSize:"16px"}}> Manage users! </h5>
                      </div>
                      <div className='col-4 text-right'>
                        <i class="mdi mdi-account-group-outline font-weight-bold text-primary icon-lg"></i>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex grid-margin stretch-card">
              <div className="card sale-visit-statistics-border">
                <div className="card-body">
                  <NavLink to="/settings/orderby" className="text-decoration-none">
                    <div className='row'>
                      <div className='col-8 text-left'>
                        <h2 className="text-dark mb-2 font-weight-bold" style={{fontSize:"25px"}}> Order by? </h2>
                        <h5 className="card-title mb-2 h5 font-weight-normal" style={{fontSize:"16px"}}>order takers! </h5>
                      </div>
                      <div className='col-4 text-right'>
                        <i class="mdi mdi-account-question-outline font-weight-bold text-primary icon-lg"></i>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex grid-margin stretch-card">
              <div className="card sale-visit-statistics-border">
                <div className="card-body">
                  <NavLink to="/settings/addcust" className="text-decoration-none">
                    <div className='row'>
                      <div className='col-8 text-left'>
                        <h2 className="text-dark mb-2 font-weight-bold" style={{fontSize:"25px"}}> Customers </h2>
                        <h5 className="card-title mb-2 h5 font-weight-normal" style={{fontSize:"16px"}}> Manage customers! </h5>
                      </div>
                      <div className='col-4 text-right'>
                        <i class="mdi mdi-account-multiple-check font-weight-bold text-primary icon-lg"></i>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex grid-margin stretch-card">
              <div className="card sale-visit-statistics-border">
                <div className="card-body">
                  <NavLink to="/settings/products" className="text-decoration-none">
                    <div className='row'>
                      <div className='col-8 text-left'>
                        <h2 className="text-dark mb-2 font-weight-bold" style={{fontSize:"25px"}}> Products </h2>
                        <h5 className="card-title mb-2 h5 font-weight-normal" style={{fontSize:"16px"}}> Manage Products! </h5>
                      </div>
                      <div className='col-4 text-right'>
                        <i class="mdi mdi-package-variant font-weight-bold text-primary icon-lg"></i>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex grid-margin stretch-card">
              <div className="card sale-visit-statistics-border">
                <div className="card-body">
                  <NavLink to="/settings/category" className="text-decoration-none">
                    <div className='row'>
                      <div className='col-8 text-left'>
                        <h2 className="text-dark mb-2 font-weight-bold" style={{fontSize:"25px"}}> Series </h2>
                        <h5 className="card-title mb-2 h5 font-weight-normal" style={{fontSize:"16px"}}> Products Series! </h5>
                      </div>
                      <div className='col-4 text-right'>
                        <i class="mdi mdi-file-tree-outline font-weight-bold text-primary icon-lg"></i>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex grid-margin stretch-card">
              <div className="card sale-visit-statistics-border">
                <div className="card-body">
                  <NavLink to="/settings/cushion" className="text-decoration-none">
                    <div className='row'>
                      <div className='col-8 text-left'>
                        <h2 className="text-dark mb-2 font-weight-bold" style={{fontSize:"25px"}}> Cushion </h2>
                        <h5 className="card-title mb-2 h5 font-weight-normal" style={{fontSize:"16px"}}> Chairs Cushion! </h5>
                      </div>
                      <div className='col-4 text-right'>
                        <i class="mdi mdi-rotate-left-variant xxmdi-seat mdi-sofa-single-outline font-weight-bold text-primary icon-lg"></i>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex grid-margin stretch-card">
              <div className="card sale-visit-statistics-border">
                <div className="card-body">
                  <NavLink to="/settings/frame" className="text-decoration-none">
                    <div className='row'>
                      <div className='col-8 text-left'>
                        <h2 className="text-dark mb-2 font-weight-bold" style={{fontSize:"25px"}}> Frame </h2>
                        <h5 className="card-title mb-2 h5 font-weight-normal" style={{fontSize:"16px"}}> Chairs Frame! </h5>
                      </div>
                      <div className='col-4 text-right'>
                        <i class="mdi mdi-seat-outline font-weight-bold text-primary icon-lg"></i>
                      </div>
                    </div>
                  </NavLink>
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

export default Settings;