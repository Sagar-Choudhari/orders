import React from 'react';
import {NavLink} from 'react-router-dom';

const Customers = () => {
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
                    <h3 className="text-dark font-weight-bold mb-2">All Customers</h3>
                    <h6 className="font-weight-normal mb-2">Add / Update / Delete Customers</h6>
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
                      <NavLink className="btn btn-primary btn-md btn-icon-text" exact to="./addcust">
                        <i className="mdi mdi-cube-send mdi-18px btn-icon-prepend"></i>  Add New Customer                        
                      </NavLink>
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

export default Customers;