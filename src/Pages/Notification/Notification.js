import React, {useState} from 'react'
import './Notification.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Check from '../../assets/img/svgs/check.svg'
import Notifi from '../../assets/img/svgs/bell3.svg'
import Magnifier from '../../assets/img/svgs/magnifier.svg'
import Speaker from '../../assets/img/svgs/speaker.svg'
import Footer from '../../Components/Footer/Footer'

const Notification = () => {

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showInfoToast, setShowInfoToast] = useState(false);
  const [showWarningToast, setShowWarningToast] = useState(false);
  const [showDangerToast, setShowDangerToast] = useState(false);

  const showToast = (toast) => {
    switch (toast) {
      case 'success':
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 5000);
        break;
      case 'info':
        setShowInfoToast(true);
        setTimeout(() => setShowInfoToast(false), 5000);
        break;
      case 'warning':
        setShowWarningToast(true);
        setTimeout(() => setShowWarningToast(false), 5000);
        break;
      case 'danger':
        setShowDangerToast(true);
        setTimeout(() => setShowDangerToast(false), 5000);
        break;
      default:
        break;
    }
  };

    return (
        <div className='back-stable d-flex'>
            <Sidebar />
            <main className="main-content col-lg-10 side-space position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Navbar />
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto" style={{ margin: '7.5rem' }}>
                            <div className="card mt-4">
                                <div className="card-header p-3">
                                    <h5 className="mb-0">Notifications</h5>
                                    <p className="text-sm mb-0">
                                        Notifications on this page use Toasts from Bootstrap. Read more details{' '}
                                        <Link className='link-title' to="https://getbootstrap.com/docs/5.0/components/toasts/" target="_blank">
                                            here
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <button
                                                className="btn bg-gradient-success w-100 mb-0 toast-btn"
                                                type="button"
                                                onClick={() => showToast('success')}
                                            >
                                                Success
                                            </button>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12 mt-sm-0 mt-2">
                                            <button
                                                className="btn bg-gradient-info w-100 mb-0 toast-btn"
                                                type="button"
                                                onClick={() => showToast('info')}
                                            >
                                                Info
                                            </button>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                                            <button
                                                className="btn bg-gradient-warning w-100 mb-0 toast-btn"
                                                type="button"
                                                onClick={() => showToast('warning')}
                                            >
                                                Warning
                                            </button>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                                            <button
                                                className="btn bg-gradient-danger w-100 mb-0 toast-btn"
                                                type="button"
                                                onClick={() => showToast('danger')}
                                            >
                                                Danger
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-fixed bottom-1 z-index-2" style={{width : '1094px',direction : 'ltr'}}>
                            {showSuccessToast && (
                                <div className="toast fade show p-2 bg-white" role="alert" aria-live="assertive" id="successToast" aria-atomic="true">
                                    <div className="toast-header border-0">
                                        <img src={Check} className="material-icons text-success ms-2"/>
                                        <span className="ms-3 font-weight-bold">Material Dashboard </span>
                                        <small className="text-body ms-auto">11 mins ago</small>
                                        <i
                                            className="fas fa-times text-md ms-3 cursor-pointer"
                                            data-bs-dismiss="toast"
                                            aria-label="Close"
                                            onClick={() => setShowSuccessToast(false)}
                                        ></i>
                                    </div>
                                    <hr className="horizontal dark m-0" />
                                    <div className="toast-body">Hello, world! This is a success notification message.</div>
                                </div>
                            )}

                            {showInfoToast && (
                                <div className="toast fade show p-2 mt-2 bg-gradient-info" role="alert" aria-live="assertive" id="infoToast" aria-atomic="true">
                                    <div className="toast-header bg-transparent border-0">
                                        <img src={Notifi} className="material-icons text-success ms-2"/>
                                        <span className="ms-3 text-white font-weight-bold">Material Dashboard </span>
                                        <small className="text-white ms-auto">11 mins ago</small>
                                        <i
                                            className="fas fa-times text-md text-white ms-3 cursor-pointer"
                                            data-bs-dismiss="toast"
                                            aria-label="Close"
                                            onClick={() => setShowInfoToast(false)}
                                        ></i>
                                    </div>
                                    <hr className="horizontal light m-0" />
                                    <div className="toast-body text-white">Hello, world! This is an info notification message.</div>
                                </div>
                            )}

                            {showWarningToast && (
                                <div className="toast fade show p-2 mt-2 bg-white" role="alert" aria-live="assertive" id="warningToast" aria-atomic="true">
                                    <div className="toast-header border-0">
                                        <img src={Magnifier} className="material-icons text-success ms-2"/>
                                        <span className="ms-3 font-weight-bold">Material Dashboard </span>
                                        <small className="text-body ms-auto">11 mins ago</small>
                                        <i
                                            className="fas fa-times text-md ms-3 cursor-pointer"
                                            data-bs-dismiss="toast"
                                            aria-label="Close"
                                            onClick={() => setShowWarningToast(false)}
                                        ></i>
                                    </div>
                                    <hr className="horizontal dark m-0" />
                                    <div className="toast-body">Hello, world! This is a warning notification message.</div>
                                </div>
                            )}

                            {showDangerToast && (
                                <div className="toast fade show p-2 mt-2 bg-white" role="alert" aria-live="assertive" id="dangerToast" aria-atomic="true">
                                    <div className="toast-header border-0">
                                        <img src={Speaker} className="material-icons text-success ms-2"/>
                                        <span className="ms-3 text-gradient text-danger font-weight-bold">Material Dashboard </span>
                                        <small className="text-body ms-auto">11 mins ago</small>
                                        <i
                                            className="fas fa-times text-md ms-3 cursor-pointer"
                                            data-bs-dismiss="toast"
                                            aria-label="Close"
                                            onClick={() => setShowDangerToast(false)}
                                        ></i>
                                    </div>
                                    <hr className="horizontal dark m-0" />
                                    <div className="toast-body">Hello, world! This is a danger notification message.</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default Notification
