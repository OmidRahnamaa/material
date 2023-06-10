import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Notification = () => {
    return (
        <div className='back-stable d-flex'>
            <Sidebar />
            <main className="main-content col-lg-10 side-space position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Navbar />
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="card mt-4">
                                <div className="card-header p-3">
                                    <h5 className="mb-0">Alerts</h5>
                                </div>
                                <div className="card-body p-3 pb-0">
                                    <div className="alert alert-primary alert-dismissible text-white" role="alert">
                                        <span className="text-sm">A simple primary alert with <Link to="javascript:;" className="alert-link text-white">an example link</Link>. Give it a click if you like.</span>
                                        <button type="button" className="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-secondary alert-dismissible text-white" role="alert">
                                        <span className="text-sm">A simple secondary alert with <Link to="javascript:;" className="alert-link text-white">an example link</Link>. Give it a click if you like.</span>
                                        <button type="button" className="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-success alert-dismissible text-white" role="alert">
                                        <span className="text-sm">A simple success alert with <Link to="javascript:;" className="alert-link text-white">an example link</Link>. Give it a click if you like.</span>
                                        <button type="button" className="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-danger alert-dismissible text-white" role="alert">
                                        <span className="text-sm">A simple danger alert with <Link to="javascript:;" className="alert-link text-white">an example link</Link>. Give it a click if you like.</span>
                                        <button type="button" className="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-warning alert-dismissible text-white" role="alert">
                                        <span className="text-sm">A simple warning alert with <Link to="javascript:;" className="alert-link text-white">an example link</Link>. Give it a click if you like.</span>
                                        <button type="button" className="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-info alert-dismissible text-white" role="alert">
                                        <span className="text-sm">A simple info alert with <Link to="javascript:;" className="alert-link text-white">an example link</Link>. Give it a click if you like.</span>
                                        <button type="button" className="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-light alert-dismissible text-white" role="alert">
                                        <span className="text-sm">A simple light alert with <Link to="javascript:;" className="alert-link text-white">an example link</Link>. Give it a click if you like.</span>
                                        <button type="button" className="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-dark alert-dismissible text-white" role="alert">
                                        <span className="text-sm">A simple dark alert with <Link to="javascript:;" className="alert-link text-white">an example link</Link>. Give it a click if you like.</span>
                                        <button type="button" className="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-4">
                                <div className="card-header p-3">
                                    <h5 className="mb-0">Notifications</h5>
                                    <p className="text-sm mb-0">
                                        Notifications on this page use Toasts from Bootstrap. Read more details <Link to="https://getbootstrap.com/docs/5.0/components/toasts/" target="
          ">here</Link>.
                                    </p>
                                </div>
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <button className="btn bg-gradient-success w-100 mb-0 toast-btn" type="button" data-target="successToast">Success</button>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12 mt-sm-0 mt-2">
                                            <button className="btn bg-gradient-info w-100 mb-0 toast-btn" type="button" data-target="infoToast">Info</button>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                                            <button className="btn bg-gradient-warning w-100 mb-0 toast-btn" type="button" data-target="warningToast">Warning</button>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                                            <button className="btn bg-gradient-danger w-100 mb-0 toast-btn" type="button" data-target="dangerToast">Danger</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-fixed bottom-1 end-1 z-index-2">
                        <div className="toast fade hide p-2 bg-white" role="alert" aria-live="assertive" id="successToast" aria-atomic="true">
                            <div className="toast-header border-0">
                                <i className="material-icons text-success me-2">
                                    check
                                </i>
                                <span className="me-auto font-weight-bold">Material Dashboard </span>
                                <small className="text-body">11 mins ago</small>
                                <i className="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
                            </div>
                            <hr className="horizontal dark m-0"/>
                                <div className="toast-body">
                                    Hello, world! This is a notification message.
                                </div>
                        </div>
                        <div className="toast fade hide p-2 mt-2 bg-gradient-info" role="alert" aria-live="assertive" id="infoToast" aria-atomic="true">
                            <div className="toast-header bg-transparent border-0">
                                <i className="material-icons text-white me-2">
                                    notifications
                                </i>
                                <span className="me-auto text-white font-weight-bold">Material Dashboard </span>
                                <small className="text-white">11 mins ago</small>
                                <i className="fas fa-times text-md text-white ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
                            </div>
                            <hr className="horizontal light m-0"/>
                                <div className="toast-body text-white">
                                    Hello, world! This is a notification message.
                                </div>
                        </div>
                        <div className="toast fade hide p-2 mt-2 bg-white" role="alert" aria-live="assertive" id="warningToast" aria-atomic="true">
                            <div className="toast-header border-0">
                                <i className="material-icons text-warning me-2">
                                    travel_explore
                                </i>
                                <span className="me-auto font-weight-bold">Material Dashboard </span>
                                <small className="text-body">11 mins ago</small>
                                <i className="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
                            </div>
                            <hr className="horizontal dark m-0"/>
                                <div className="toast-body">
                                    Hello, world! This is a notification message.
                                </div>
                        </div>
                        <div className="toast fade hide p-2 mt-2 bg-white" role="alert" aria-live="assertive" id="dangerToast" aria-atomic="true">
                            <div className="toast-header border-0">
                                <i className="material-icons text-danger me-2">
                                    campaign
                                </i>
                                <span className="me-auto text-gradient text-danger font-weight-bold">Material Dashboard </span>
                                <small className="text-body">11 mins ago</small>
                                <i className="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
                            </div>
                            <hr className="horizontal dark m-0"/>
                                <div className="toast-body">
                                    Hello, world! This is a notification message.
                                </div>
                        </div>
                    </div>
                    <footer className="footer py-4  ">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-lg-6 mb-lg-0 mb-4">
                                    <div className="copyright text-center text-sm text-muted text-lg-start">
                                        © <script>
                                            document.write(new Date().getFullYear())
                                        </script>,
                                        made with <i className="fa fa-heart"></i> by
                                        <Link to="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim</Link>
                                        for a better web.
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <Link to="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank">License</Link>
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

export default Notification
