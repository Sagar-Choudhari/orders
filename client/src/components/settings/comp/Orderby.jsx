import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';


const Orderby = () => {

  const navigate = useNavigate();

  const [oby, setOby] = useState({
    fullname:"",
    designation:""
  });

  let name, value;

  const handleInputs = (events) => {
    console.log(events);
    name = events.target.name;
    value = events.target.value;

    setOby({...oby, [name]:value});
  }

  const PostData = async (event) => {
    event.preventDefault();

    const { fullname, designation } = oby;

    const response = await fetch("/regorderby", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        fullname,
        designation
      })
    });

    const data = await response.json();

    if(data.status === 422 || !data) {
        window.alert("Invalid Data :|");
        console.log("Invalid Data :|");
    } else {
      window.alert("Data added successfully :)");
      console.log("Data added successfully :)");
    }
    navigate.push('/');
  }

  return (
  <div className="orderby">
    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-sm-6 mb-4 mb-xl-0">
              <div className="d-lg-flex align-items-center ml-3">
                <div>
                  <h3 className="text-dark font-weight-bold mb-2">Manage Order Takers</h3>
                  <h6 className="font-weight-normal mb-2">Orders taken from?</h6>
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
                  <form method="POST" className='form'>
                    <div className='form-group'>
                      <label for="" className="form-label text-left"> Fullname </label>
                      <input 
                        type="text" 
                        className="text-left form-control form-control-sm border-secondary" 
                        name="fullname" 
                        id="" 
                        placeholder="Enter Full Name" 
                        value={oby.fullname}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className='form-group'>
                      <label for="text" className='form-label text-left'> Designation </label>
                      <input type='text' 
                        className="text-left form-control form-control-sm border-secondary" 
                        name='designation' 
                        placeholder='Enter Designation' 
                        id=""
                        value={oby.designation}
                        onChange={handleInputs}
                      />
                    </div>
                    <input type='submit' className="btn btn-primary submit" name='submit' onClick={PostData}/>
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
                      </tr>
                    </thead>
                    <tbody className='table-striped'>
                      <tr>
                        <td>12</td>
                        <td>Rahul Chawla</td>
                        <td>Director</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Balram Chawla</td>
                        <td>Director</td>
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

export default Orderby;