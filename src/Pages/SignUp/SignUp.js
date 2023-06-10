import React from 'react'
import { Link } from "react-router-dom"
import './SignUp.css'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const SignUp = () => {
    return (
        <div>
            <main className="main-content  mt-0">
                <section>
                    <div className="page-header min-vh-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                                    <div className="position-relative back-pic bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                    <div className="card card-plain">
                                        <div className="card-header heading">
                                            <h4 className="font-weight-bolder">Sign Up</h4>
                                            <p className="mb-0 email-text">Enter your email and password to register</p>
                                        </div>
                                        <div className="card-body bodying">
                                            <form role="form">
                                                <div className="input-group input-group-outline mb-3">
                                                    <FormControl sx={{ width: '20rem' }}>
                                                        <OutlinedInput size="small" placeholder="Name" />
                                                    </FormControl>
                                                </div>
                                                <div className="input-group input-group-outline mb-3">
                                                    <FormControl sx={{ width: '20rem' }}>
                                                        <OutlinedInput size="small" placeholder="Email" />
                                                    </FormControl>
                                                </div>
                                                <div className="input-group input-group-outline mb-3">
                                                    <FormControl sx={{ width: '20rem' }}>
                                                        <OutlinedInput size="small" placeholder="Password" />
                                                    </FormControl>
                                                </div>
                                                <div className="form-check form-check-info text-end pe-0">
                                                    <input className="form-check-input check-detail" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label check-label" htmlFor="flexCheckDefault">
                                                        I agree the <Link to="#" className="text-dark font-weight-bolder">Terms and Conditions</Link>
                                                    </label>
                                                </div>
                                                <div className="text-center">
                                                    <button type="button" className="btn btn-lg bg-gradient-primaryb btn-lg w-100 mt-4 mb-0">Sign Up</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer footing text-center pt-0 px-lg-2 px-1">
                                            <p className="mb-2 text-sm mx-auto sign-in-link">
                                                Already have an account?
                                                <Link to="/sign-in" className="text-gradient font-weight-bold">Sign in</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SignUp
