import React from 'react';
import {NavLink} from 'react-router-dom'; 

const Cushion = () => {
return(
    <div>
        <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">
                <div className="row">
                    <div className="col-sm-6 mb-4 mb-xl-0">
                    <div className="d-lg-flex align-items-center ml-3">
                        <div>
                        <h3 className="text-dark font-weight-bold mb-2">Add Cushion</h3>
                        <h6 className="font-weight-normal mb-2">Manage Cushion?</h6>
                        </div>
                        <div className="ml-lg-5 d-lg-flex d-none">
                        <button type="button" className="btn bg-white btn-icon">
                            <i className="mdi mdi-view-grid text-success"></i>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 mt-4'>
                    <div className='container'>
                        <div className=''>
                        <form action="#" method="post" className='form'>
                            <div className='row'>
                                <div className='form-group col-sm-6'>
                                    <label for="" className="form-label text-left"> Name / Size </label>
                                    <input type="text" className="text-left form-control form-control-sm border-secondary" name="name" id="" placeholder="Enter Name / Size" />
                                </div>
                                <div className='form-group col-sm-6'>
                                    <label for="" className="form-label text-left"> Size </label>
                                    <input type="text" className="text-left form-control form-control-sm border-secondary" name="size" id="" placeholder="Enter size of cushion" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='form-group col-sm-6'>
                                    <label for="" className="form-label text-left"> Cloth </label>
                                    <input type="text" className="text-left form-control form-control-sm border-secondary" name="cloth" id="" placeholder="Enter cloth used" />
                                </div>
                                <div className='form-group col-sm-6'>
                                    <label for="text" className='form-label text-left'> Colour </label>
                                    <input type='text' className="text-left form-control form-control-sm border-secondary" name='color' placeholder='Enter colour of cushion' id=""/>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="text" className='form-label text-left'> Extra Details </label>
                                <textarea className="text-left form-control form-control-sm border-secondary" name='extradetails' placeholder='Enter details about cushion' id=""></textarea>
                            </div>
                            <input type='submit' className="btn btn-primary submit" name='submit' />
                            <button className="ml-2 btn btn-light shadow-sm" name='clear'>Clear All</button>
                            </form>
                        </div>
                    </div>
                    </div>
                    <div className='col-6'>
                    <div className='container'>
                        <div className=''>
                        <table className='table table-bordered border-primary m-0 p-0'>
                            <thead className='thead-light m-0'>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Designation</th>
                                <th scope='col'>Action</th>
                            </tr>
                            </thead>
                            <tbody className=''>
                            <tr>
                                <td>12</td>
                                <td>Rahul Chawla</td>
                                <td>Director</td>
                                <td><select className='custom-select btn shadow-sm'><option selected hidden>Select</option><option value='update'>Update</option><option value='delete'>Delete</option></select></td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Balram Chawla</td>
                                <td>Director</td>
                                <td className='text-center'> <div className='btn btn-warning shadow-sm'>Update / Delete</div></td>
                            </tr>
                            </tbody>
                        </table>
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

export default Cushion;