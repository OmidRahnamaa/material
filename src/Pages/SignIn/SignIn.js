import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import Facebook from '../../assets/img/svgs/facebook.svg'
import Github from '../../assets/img/svgs/github.svg'
import Google from '../../assets/img/svgs/google.svg'
import Switch from '@mui/material/Switch';
import MaterNav from '../../Components/MaterNav/MaterNav'
import Footer from '../../Components/Footer/Footer'

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const SignIn = () => {
    return (
        <div className="bg-gray-200">
            <MaterNav />
            <main className="main-content  mt-0">
                <div className="page-header back-img align-items-start min-vh-100">
                    <span className="mask bg-gradient-darks opacity-6"></span>
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-primarys shadow-primary border-radius-lg py-3 pe-1">
                                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">ورود</h4>
                                            <div className="row mt-3 sign-logo">
                                                <div className="col-2 text-center pe-2">
                                                    <Link className="btn btn-link p3-3 ps-0" to="#">
                                                        <img src={Facebook} className="fa-facebook text-white text-lg" alt='np' />
                                                    </Link>
                                                </div>
                                                <div className="col-2 text-center px-1">
                                                    <Link className="btn btn-link pe-2" to="#">
                                                        <img src={Github} className="fa-github text-white text-lg" alt='np' />
                                                    </Link>
                                                </div>
                                                <div className="col-2 text-center ps-2">
                                                    <Link className="btn btn-link ps-3 pe-0" to="#">
                                                        <img src={Google} className="fa-google text-white text-lg" alt='np' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form role="form" className="text-start">
                                            <div className="input-group input-group-outline my-3">
                                                <label className="form-labels">آدرس ایمیل</label>
                                                <input type="email" className="form-control sign-form" placeholder="&nbsp;"/>
                                            </div>
                                            <div className="input-group input-group-outline">
                                                <label className="form-labels">رمز عبور</label>
                                                <input type="password" className="form-control sign-form" placeholder="&nbsp;"/>
                                            </div>
                                            <div className="form-check form-switch d-flex align-items-center mb-3">
                                                <Switch {...label} defaultChecked color='default' />
                                                <label className="form-check-label mb-1 ms-3" htmlFor="rememberMe">مرا به یاد بیاور</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn bg-gradient-primaryb w-100 my-4 mb-2">ورود</button>
                                            </div>
                                            <p className="mt-4 text-sm text-center">
                                            حساب کاربری ندارید؟
                                                <Link to="/sign-up" className="text-gradient font-weight-bold">ثبت نام</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default SignIn
