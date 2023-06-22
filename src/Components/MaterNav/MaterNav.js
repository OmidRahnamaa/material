import React from 'react'
import { Link } from 'react-router-dom'
import './MaterNav.css'
import Dashboard from '../../assets/img/svgs/dashboard2.png'
import Person from '../../assets/img/svgs/profile2.png'
import Login from '../../assets/img/svgs/login2.png'
import Assignment from '../../assets/img/svgs/signin.png'

const MaterNav = () => {
    return (
        <div class="container position-sticky z-index-sticky top-0" style={{ zIndex: '999' }}>
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 position-absolute my-3 py-2 start-0 end-0 mx-4">
                        <div class="container-fluid ps-2 ps-0">
                            <Link class="navbar-brand fs-6 text-grey font-weight-bolder me-lg-0 me-3 " to="/">
                                داشبورد 2
                            </Link>
                            <div class="collapse navbar-collapse" id="navigation">
                                <ul class="navbar-nav me-auto">
                                    <li class="nav-item" style={{margin : '0'}}>
                                        <Link class="nav-link text-grey fs-6 d-flex align-items-center me-2 active" aria-current="page" to="/">
                                            <img src={Dashboard} class="fa fa-chart-pie opacity font-xs text-grey ms-1" />
                                            داشبورد
                                        </Link>
                                    </li>
                                    <li class="nav-item" style={{margin : '0'}}>
                                        <Link class="nav-link text-grey fs-6 me-2" to="/profile">
                                            <img src={Person} class="fa fa-chart-pie opacity font-xs text-grey ms-1" />
                                            پروفایل
                                        </Link>
                                    </li>
                                    <li class="nav-item" style={{margin : '0'}}>
                                        <Link class="nav-link text-grey me-2 fs-6" to="/sign-up">
                                            <img src={Assignment} class="fa fa-chart-pie opacity font-xs text-grey ms-1" />
                                            ثبت نام
                                        </Link>
                                    </li>
                                    <li class="nav-item" style={{margin : '0'}}>
                                        <Link class="nav-link text-grey me-2 fs-6" to="/sign-in">
                                            <img src={Login} class="fa fa-chart-pie opacity font-xs text-grey ms-1" />
                                            ورود کاربر
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default MaterNav
