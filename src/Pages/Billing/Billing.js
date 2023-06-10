import React from 'react'
import BillInfo from '../../Components/BillInfo/BillInfo'
import CreditCard from '../../Components/CreditCard/CreditCard'
import Invoices from '../../Components/Invoices/Invoices'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Tran from '../../Components/Tran/Tran'

const Billing = () => {
    return (
        <div className='back-stable d-flex'>
            <Sidebar />
            <main className="main-content col-lg-10 side-space position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Navbar />
                <div className="container-fluid side-space py-4">
                    <div className="row">
                        <CreditCard />
                        <Invoices />
                    </div>
                    <div className="row">
                        <BillInfo />
                        <Tran />
                    </div>
                    <footer className="footer py-1">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-lg-6 mb-lg-0 mb-4">
                                    <div className="copyright text-center text-sm text-muted text-lg-end">
                                        © <script>
                                            document.write(new Date().getFullYear())
                                        </script>,
                                        made with <i className="fa fa-heart"></i> by
                                        <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim</a>
                                        for a better web.
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank">License</a>
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

export default Billing
