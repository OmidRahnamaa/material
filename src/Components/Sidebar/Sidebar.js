import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css'
import mainLogo from '../../assets/img/logo-ct.png'
import Dashboard from '../../assets/img/svgs/dashboard.svg'
import Table from '../../assets/img/svgs/table.svg'
import Receipt from '../../assets/img/svgs/receipt.svg'
import View from '../../assets/img/svgs/view.svg'
import Notifi from '../../assets/img/svgs/notifications.svg'
import Person from '../../assets/img/svgs/person.svg'
import Login from '../../assets/img/svgs/login.svg'
import Assignment from '../../assets/img/svgs/assignment.svg'

const Sidebar = () => {
    return (
        <aside className="sidebar my-3 col-lg-2">
            <ul className="nav flex-column">
                <li className="nav-title">
                    <Link className="nav-link text-white" to="#">
                        <img className='navbar-brand-img h-100' src={mainLogo} alt='main-logo' />
                        <span>Material</span>
                    </Link>
                </li>
                <hr className='horizontal light mt-0 mb-2'/>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="#">
                        <img className="svg-sidebar" src={Dashboard} alt="dashboard" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="#">
                        <img className="svg-sidebar" src={Table} alt="table"/>
                        <span>Tables</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="#">
                        <img className="svg-sidebar" src={Receipt} alt="billing"/>
                        <span>Billing</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="#">
                        <img className="svg-sidebar" src={View} alt="view"/>
                        <span>Virtual Reality</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="#">
                        <img className="svg-sidebar" src={Notifi} alt="notification"/>
                        <span>Notifications</span>
                    </Link>
                </li>
                <h6 className='pe-4 my-3 text-uppercase text-white text-detail'>account pages</h6>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="#">
                        <img className="svg-sidebar" src={Person} alt="profile"/>
                        <span>Profile</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="#">
                        <img className="svg-sidebar" src={Login} alt="sign in"/>
                        <span>Sign In</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="#">
                        <img className="svg-sidebar" src={Assignment} alt="sign up"/>
                        <span>Sign Up</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
