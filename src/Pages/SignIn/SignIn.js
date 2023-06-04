import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import Facebook from '../../assets/img/svgs/facebook.svg'
import Github from '../../assets/img/svgs/github.svg'
import Google from '../../assets/img/svgs/google.svg'


const SignIn = () => {
    return (
        <div className="bg-gray-200">
            <main className="main-content  mt-0">
                <div className="page-header align-items-start min-vh-100">
                    <span className="mask bg-gradient-dark opacity-6"></span>
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-primarys shadow-primary border-radius-lg py-3 pe-1">
                                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                                            <div className="row mt-3 sign-logo">
                                                <div className="col-2 text-center pe-2">
                                                    <Link className="btn btn-link p3-3 ps-0" to="#">
                                                        <img src={Facebook} className="fa-facebook text-white text-lg" alt='np'/>
                                                    </Link>
                                                </div>
                                                <div className="col-2 text-center px-1">
                                                    <Link className="btn btn-link pe-2" to="#">
                                                        <img src={Github} className="fa-github text-white text-lg" alt='np'/>
                                                    </Link>
                                                </div>
                                                <div className="col-2 text-center ps-2">
                                                    <Link className="btn btn-link ps-3 pe-0" to="#">
                                                        <img src={Google} className="fa-google text-white text-lg" alt='np'/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form role="form" className="text-start">
                                            <div className="input-group input-group-outline my-3">
                                                <label className="form-labels">Email</label>
                                                <input type="email" className="form-control sign-form" />
                                            </div>
                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-labels">Password</label>
                                                <input type="password" className="form-control sign-form" />
                                            </div>
                                            <div className="form-check form-switch d-flex align-items-center mb-3">
                                                <input className="form-check-input" type="checkbox" id="rememberMe" checked />
                                                <label className="form-check-label mb-0 ms-3" for="rememberMe">Remember me</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                                            </div>
                                            <p className="mt-4 text-sm text-center">
                                                Don't have an account?
                                                <Link to="../pages/sign-up.html" className="text-primary text-gradient font-weight-bold">Sign up</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer position-absolute bottom-2 py-2 w-100">
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-12 col-md-6 my-auto">
                                    <div className="copyright text-center text-sm text-white text-lg-start">
                                        © <script>
                                            document.write(new Date().getFullYear())
                                        </script>,
                                        made with <i className="fa fa-heart" aria-hidden="true"></i> by
                                        <Link to="https://www.creative-tim.com" className="font-weight-bold text-white" target="_blank">Creative Tim</Link>
                                        for a better web.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <Link to="https://www.creative-tim.com" className="nav-link text-white" target="_blank">Creative Tim</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="https://www.creative-tim.com/presentation" className="nav-link text-white" target="_blank">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="https://www.creative-tim.com/blog" className="nav-link text-white" target="_blank">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="https://www.creative-tim.com/license" className="nav-link pe-0 text-white" target="_blank">License</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    )
}

export default SignIn
