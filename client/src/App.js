import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from './container/topbar/Topbar';
import {Dashboard, Order, Dispatch, Production, Stock, Report, Settings} from './components/index';
import {Profile, Users, Orderby, Customers, Addcust, Products, Category, Cushion, Frame} from './components/settings/index';
import Footer from './container/footer/Footer';
import NewOrder from './components/order/add/Neworder';

//npx browserslist@latest --update-db
const App = () => {
  return (
  <div className="App">
    <Router>    
      <div class="container-scroller">
      <Topbar />
      <div class="container-fluid page-body-wrapper">
			  <div class="main-panel">
          <Switch>
            <Route exact path="/" component={<Dashboard/>} />
            <Route exact path="/order" component={<Order/>} />
            <Route exact path="/order/neworder" component={<NewOrder/>} />
            <Route exact path="/dispatch" component={<Dispatch/>} />
            <Route exact path="/production" component={<Production/>} />
            <Route exact path="/stock" component={<Stock/>} />
            <Route exact path="/report" component={<Report/>} />
            {/* <Route exact path="/sample" component={<Sample} /> */}
            <Route exact path="/settings" component={<Settings/>} />
            <Route exact path="/settings/profile" component={<Profile/>} />
            <Route exact path="/settings/users" component={<Users/>} />
            <Route exact path="/settings/orderby" component={<Orderby/>} />
            <Route exact path="/settings/customers" component={<Customers/>} />
            <Route exact path="/settings/addcust" component={<Addcust/>} />
            <Route exact path="/settings/products" component={<Products/>} />
            <Route exact path="/settings/category" component={<Category/>} />
            <Route exact path="/settings/cushion" component={<Cushion/>} />
            <Route exact path="/settings/frame" component={<Frame/>} />
          </Switch>
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