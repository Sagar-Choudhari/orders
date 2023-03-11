import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './container/topbar/Topbar';
import {Dashboard, Order, Dispatch, Production, Stock, Report, Settings} from './components/index';
import {Profile, Users, Orderby, Customers, Addcust, Products, Category, Cushion, Frame} from './components/settings/index';
import Footer from './container/footer/Footer';
import NewOrder from './components/order/add/Neworder';

const App = () => {
  return (
  <div className="App">
    <Router>    
      <div class="container-scroller">
      <Topbar />
      <div class="container-fluid page-body-wrapper">
			  <div class="main-panel">
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route exact path="/order" element={<Order/>} /> 
            <Route exact path="/order/neworder" element={<NewOrder/>} />
            <Route exact path="/dispatch" element={<Dispatch/>} />
            <Route exact path="/production" element={<Production/>} />
            <Route exact path="/stock" element={<Stock/>} />
            <Route exact path="/report" element={<Report/>} /> 
            {/* <Route exact path="/sample" element={<Sample/>} /> */}
            <Route exact path="/settings" element={<Settings/>} />
            <Route exact path="/settings/profile" element={<Profile/>} />
            <Route exact path="/settings/users" element={<Users/>} />
            <Route exact path="/settings/orderby" element={<Orderby/>} />
            <Route exact path="/settings/customers" element={<Customers/>} />
            <Route exact path="/settings/addcust" element={<Addcust/>} />
            <Route exact path="/settings/products" element={<Products/>} />
            <Route exact path="/settings/category" element={<Category/>} />
            <Route exact path="/settings/cushion" element={<Cushion/>} />
            <Route exact path="/settings/frame" element={<Frame/>} /> 
          </Routes>
        </div>
      </div>
      <Footer />
      </div>
    </Router>
  </div>
  );
}

export default App;



// import React from 'react'

// export default function Topbar(){
//     return(
//         <h1>sagar</h1>
//     )
// } 