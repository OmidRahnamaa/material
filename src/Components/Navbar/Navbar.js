import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import TextField from '@mui/material/TextField';
import Gear from '../../assets/img/svgs/gear.svg';
import Bell from '../../assets/img/svgs/bell.svg';
import Person2 from '../../assets/img/svgs/person2.svg';
import Laur from '../../assets/img/team-2.jpg'
import Spotify from '../../assets/img/small-logos/logo-spotify.svg'
import Clock from '../../assets/img/svgs/clock.svg';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenDropdown: false,
        };
        this.toggleOpenDropdown = this.toggleOpenDropdown.bind(this);
    }

    toggleOpenDropdown() {
        this.setState({ isOpenDropdown: !this.state.isOpenDropdown });
    }

    render() {

        const { isOpenDropdown } = this.state

        return (
            <div>
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
                    <div className="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 ms-5">
                                <li className="breadcrumb-item text-sm"><Link className="opacity-5 text-dark" to="javascript:;">Pages</Link ></li>
                                <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
                            </ol>
                            <h6 className="font-weight-bolder mb-0">Dashboard</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="me-md-auto ps-md-3 d-flex align-items-center">
                                <div className="input-group input-group-outline">
                                    <label htmlFor="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;" />
                                        <span className="label">جستجو کنید...</span>
                                        <span className="focus-bg"></span>
                                    </label>
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="btn btn-outline-primary btn-sm mb-0 btn-nav" target="_blank" to="https://www.creative-tim.com/builder?ref=navbar-material-dashboard">Online Builder</Link >
                                </li>
                                <li className="nav-item px-2 d-flex align-items-center svg-detail">
                                    <Link to="javascript:;" className="nav-link text-body p-0">
                                        <img src={Gear} alt="Gear Icon" className="svg-navbar" />
                                    </Link >
                                </li>
                                <li className={`nav-item dropdown px-2 d-flex align-items-center svg-detail ${isOpenDropdown ? 'menu-open' : ''}`}>
                                    <Link to="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.toggleOpenDropdown}>
                                        <img src={Bell} alt="Bell Icon" className="svg-navbar" />
                                    </Link >
                                    {isOpenDropdown && (
                                        <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4 drop-nav" aria-labelledby="dropdownMenuButton">
                                            <li className="mb-2">
                                                <Link className="dropdown-item border-radius-md" to="javascript:;">
                                                    <div className="d-flex py-1">
                                                        <div className="my-auto">
                                                            <img src={Laur} alt="Avatar" className="avatar avatar-sm ms-3" />
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="text-sm font-weight-small mb-1">
                                                                <span className="font-weight-bold">New message</span> from Laur
                                                            </h6>
                                                            <p className="text-xs text-secondary mb-0">
                                                                <img src={Clock} alt='clock' className='clock' />
                                                                13 minutes ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link >
                                            </li>
                                            <li className="mb-2">
                                                <Link className="dropdown-item border-radius-md" to="javascript:;">
                                                    <div className="d-flex py-1">
                                                        <div className="my-auto">
                                                            <img src={Spotify} alt="Avatar" className="avatar avatar-sm bg-gradient-dark ms-3" />
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="text-sm font-weight-normal mb-1">
                                                                <span className="font-weight-bold">New album</span> by Travis Scott
                                                            </h6>
                                                            <p className="text-xs text-secondary mb-0">
                                                                <img src={Clock} alt='clock' className='clock' />
                                                                1 day
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link >
                                            </li>
                                            <li>
                                                <Link className="dropdown-item border-radius-md" to="javascript:;">
                                                    <div className="d-flex py-1">
                                                        <div className="avatar avatar-sm bg-gradient-secondary ms-3 my-auto">
                                                            <svg style={{ width: "12px", height: "12px" }} viewBox="0 0 43 36">
                                                                <title>credit-card</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(453.000000, 454.000000)">
                                                                                <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                                <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="text-sm font-weight-normal mb-1">
                                                                Payment successfully completed
                                                            </h6>
                                                            <p className="text-xs text-secondary mb-0">
                                                                <img src={Clock} alt='clock' className='clock' />
                                                                2 days
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link >
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-item d-flex px-2 align-items-center svg-detail">
                                    <Link to="./sign-in" className="nav-link text-body font-weight-bold px-0">
                                        <img src={Person2} alt="Person" className="svg-navbar" />
                                        <span className="d-sm-inline d-none sign">Sign In</span>
                                    </Link >
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
