import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
                <nav className="bottom-navbar navbar">
                    <div className="container">
                        <ul className="nav page-navigation">
                        <li className="nav-item" >
                            <NavLink className="nav-link" exact to="/" activeClassName='active'>
                            <i className="mdi mdi-file-document-box menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item" activeClassName='active'>
                            <NavLink exact to="/order" className="nav-link">
                                <i className="mdi mdi-cart-arrow-down menu-icon"></i>
                                <span className="menu-title">Order</span>
                                <i className="menu-arrow"></i>
                            </NavLink>
                            {/* <NavLink exact to="" className="btn btn-inverse-primary btn-sm" class='btn btn-inverse-primary btn-sm'> Customers </NavLink> */}
                            {/* <div className="submenu">
                                <ul>
                                    <li className="nav-item"><a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                                    <li className="nav-item"><a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                                </ul>
                            </div> */}
                        </li>
                        <li className="nav-item" activeClassName="active">
                            <NavLink className="nav-link" activeClassName="active"  to="/dispatch">
                                <i className="mdi mdi-truck-fast menu-icon"></i>
                                <span className="menu-title">Dispatch</span>
                                <i className="menu-arrow"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={"active"} to='/production'>
                                <i className="mdi mdi-cube-scan menu-icon"></i>
                                <span className="menu-title">Production</span>
                                <i className="menu-arrow"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item" activeClassName={"active"}>
                            <Link className="nav-link" to='/stock'>
                                <i className="mdi mdi-database-eye-outline menu-icon"></i>
                                <span className="menu-title">Stock</span>
                                <i className="menu-arrow"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/report'>
                                <i className="mdi mdi-file-document-outline menu-icon"></i>
                                <span className="menu-title">Report</span>
                                <i className="menu-arrow"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="mdi mdi-chemical-weapon menu-icon"></i>
                                <span className="menu-title"> Status </span>
                                <i className="menu-arrow"></i>
                            </a>
                            <div className="submenu">
                                <ul className="submenu-item">
                                    <li className="nav-item"><NavLink to="/settings/customers" className="text-decoration-none nav-link">Customers</NavLink></li>
                                    <li className="nav-item"><NavLink to="/settings/products" className="text-decoration-none nav-link">Products</NavLink></li>
                                    <li className="nav-item"><NavLink to="/settings/orderby" className="text-decoration-none nav-link">Order by?</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/settings'>
                                <i className="mdi mdi-cog-outline menu-icon"></i>
                                <span className="menu-title">Settings</span>
                            </Link>
                        </li>
                        </ul>
                    </div>
                </nav>

            )
    }

export default Navbar;