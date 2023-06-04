import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import Chart from '../Chart/Chart'
import SideCard from '../SideCard/SideCard'
import MainCard from '../MainCard/MainCard'
import './Main.css'


const Main = () => {
    return (
        <main className="main-content col-lg-10 position-relative max-height-vh-100 h-100 border-radius-lg ">
            <Navbar />
            <div className="container-fluid py-4">
                <Card />
                <Chart />
                <div className="row mb-4">
                    <MainCard />
                    <SideCard />
                </div>
                <footer className="footer py-4  ">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6 mb-lg-0 mb-4">
                                <div className="copyright text-center text-sm text-muted text-lg-end">
                                    © <script>
                                        document.write(new Date().getFullYear())
                                    </script>,
                                    made with <i className="fa fa-heart"></i> by
                                    <a href="https://www.creative-tim.com" className="font-weight-bold" >Creative Tim</a>
                                    for a better web.
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com" className="nav-link text-muted" >Creative Tim</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" >About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" >Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" >License</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}

export default Main
