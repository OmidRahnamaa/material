import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer py-1">
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
                                <a href="https://www.creative-tim.com" className="nav-link text-muted none-back" >Creative Tim</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted none-back" >درباره ما</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.creative-tim.com/blog" className="nav-link text-muted none-back" >وبلاگ</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.creative-tim.com/license" className="nav-link text-muted none-back" >جواز</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
