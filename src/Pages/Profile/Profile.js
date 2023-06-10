import React from 'react'
import { Link } from 'react-router-dom';
import './Profile.css'
import Switch from '@mui/material/Switch';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Pro from "../../assets/img/bruce-mars.jpg"
import Home from '../../assets/img/svgs/home.svg'
import Mail from '../../assets/img/svgs/mail.svg'
import Setting from '../../assets/img/svgs/gear.svg'
import Facebook from '../../assets/img/svgs/facebook2.svg'
import Twitter from '../../assets/img/svgs/twitter.svg'
import Instagram from '../../assets/img/svgs/instagram.svg'
import EditUser from '../../assets/img/svgs/edit-user.svg'
import User1 from "../../assets/img/kal-visuals-square.jpg"
import User2 from "../../assets/img/marie.jpg"
import User3 from "../../assets/img/ivana-square.jpg"
import User4 from "../../assets/img/team-4.jpg"
import User5 from "../../assets/img/team-3.jpg"
import Decor1 from "../../assets/img/home-decor-1.jpg"
import Decor2 from "../../assets/img/home-decor-2.jpg"
import Decor3 from "../../assets/img/home-decor-3.jpg"
import Decor4 from "../../assets/img/home-decor-4.jpg"
import Team1 from "../../assets/img/team-1.jpg"
import Team2 from "../../assets/img/team-2.jpg"
import Team3 from "../../assets/img/team-3.jpg"
import Team4 from "../../assets/img/team-4.jpg"


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Profile = () => {
    return (
        <div className='back-stable d-flex'>
            <Sidebar />
            <main className="main-content col-lg-10 side-space position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Navbar />
                <div className="container-fluid px-2 px-md-4">
                    <div className="page-header back-img border-radius-xl mt-4">
                        <span className="mask  bg-gradient-primary  opacity-6"></span>
                    </div>
                    <div className="card card-body mx-3 mx-md-4 mt-n6">
                        <div className="row gx-4 mb-2">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    <img src={Pro} alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                                </div>
                            </div>
                            <div className="col-auto my-auto" style={{ textAlign: "end" }}>
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        Richard Davis
                                    </h5>
                                    <p className="mb-0 font-weight-normal text-sm">
                                        CEO / Co-Founder
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 my-sm-auto m3-sm-auto ms-sm-0 mx-auto mt-3">
                                <div className="nav-wrapper position-relative start-0">
                                    <ul className="nav nav-pills nav-fill px-1" role="tablist">
                                        <li className="nav-item" style={{marginLeft: '0'}}>
                                            <Link className="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab" to="javascript:;" role="tab" aria-selected="true">
                                                <img src={Home} style={{ top: '0.15rem'}} className="material-icons select-detail text-lg position-relative" />
                                                <span className="mx-2" style={{fontSize : '1rem',color : '#344767'}}>App</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" to="javascript:;" role="tab" aria-selected="false">
                                                <img src={Mail} style={{ top: '0.15rem'}} className="material-icons text-lg select-detail position-relative" />
                                                <span className="mx-2" style={{fontSize : '1rem',color : '#344767'}}>Messages</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" to="javascript:;" role="tab" aria-selected="false">
                                                <img src={Setting} style={{ top: '0.15rem'}} className="material-icons text-lg select-detail position-relative" />
                                                <span className="mx-2" style={{fontSize : '1rem',color : '#344767'}}>Settings</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <h6 className="mb-0">Platform Settings</h6>
                                        </div>
                                        <div className="card-body p-3">
                                            <h6 className="text-uppercase text-grey text-xs font-weight-bolder" style={{textAlign : "start"}}>Account</h6>
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <Switch {...label} defaultChecked color='default' />
                                                        <label className="form-check-label text-grey ms-3 text-truncate w-80 mb-0" style={{marginTop : "0.4rem"}} htmlFor="flexSwitchCheckDefault">Email me when someone follows me</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <Switch {...label}  color='default' />
                                                        <label className="form-check-label text-grey ms-3 text-truncate w-80 mb-0" style={{marginTop : "0.4rem"}} htmlFor="flexSwitchCheckDefault1">Email me when someone answers on my post</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <Switch {...label}  color='default' />
                                                        <label className="form-check-label text-grey ms-3 text-truncate w-80 mb-0" style={{marginTop : "0.4rem"}} htmlFor="flexSwitchCheckDefault2">Email me when someone mentions me</label>
                                                    </div>
                                                </li>
                                            </ul>
                                            <h6 className="text-uppercase text-grey text-xs font-weight-bolder mt-4">Application</h6>
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <Switch {...label} defaultChecked color='default' />
                                                        <label className="form-check-label text-grey ms-3 text-truncate w-80 mb-0" style={{marginTop : "0.4rem"}} htmlFor="flexSwitchCheckDefault3">New launches and projects</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <Switch {...label}  color='default' />
                                                        <label className="form-check-label text-grey ms-3 text-truncate w-80 mb-0" style={{marginTop : "0.4rem"}} htmlFor="flexSwitchCheckDefault4">Monthly product updates</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0 pb-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <Switch {...label} defaultChecked color='default' />
                                                        <label className="form-check-label text-grey ms-3 text-truncate w-80 mb-0" style={{marginTop : "0.4rem"}} htmlFor="flexSwitchCheckDefault5">Subscribe to newsletter</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <div className="row">
                                                <div className="col-md-8 d-flex align-items-center">
                                                    <h6 className="mb-0">Profile Information</h6>
                                                </div>
                                                <div className="col-md-4 text-end">
                                                    <Link to="javascript:;">
                                                        <img src={EditUser} className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body p-3">
                                            <p className="text-sm">
                                                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                                            </p>
                                            <hr className="horizontal gray-light my-4" />
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 pe-0 pt-0 text-sm"><strong className="text-grey">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                                                <li className="list-group-item border-0 pe-0 text-sm"><strong className="text-grey">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                                                <li className="list-group-item border-0 pe-0 text-sm"><strong className="text-grey">Email:</strong> &nbsp; alecthompson@mail.com</li>
                                                <li className="list-group-item border-0 pe-0 text-sm"><strong className="text-grey">Location:</strong> &nbsp; USA</li>
                                                <li className="list-group-item border-0 pe-0 pb-0 text-end">
                                                    <strong className="text-grey text-sm">Social:</strong> &nbsp;
                                                    <Link className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" to="javascript:;">
                                                        <img src={Facebook} className="fab fa-facebook2 fa-lg"/>
                                                    </Link>
                                                    <Link className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" to="javascript:;">
                                                        <img src={Twitter} className="fab fa-twitter fa-lg"/>
                                                    </Link>
                                                    <Link className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" to="javascript:;">
                                                        <img src={Instagram} className="fab fa-instagram fa-lg"/>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <h6 className="mb-0">Conversations</h6>
                                        </div>
                                        <div className="card-body p-3">
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                                                    <div className="avatar ms-3">
                                                        <img src={User1} alt="kal" style={{width : "3rem"}} className="border-radius-lg shadow" />
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Sophie B.</h6>
                                                        <p className="mb-0 text-xs">Hi! I need more information..</p>
                                                    </div>
                                                    <Link className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 text-design" to="javascript:;">Reply</Link>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                    <div className="avatar ms-3">
                                                        <img src={User2} alt="kal" style={{width : "3rem"}} className="border-radius-lg shadow" />
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Anne Marie</h6>
                                                        <p className="mb-0 text-xs">Awesome work, can you..</p>
                                                    </div>
                                                    <Link className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 text-design" to="javascript:;">Reply</Link>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                    <div className="avatar ms-3">
                                                        <img src={User3} alt="kal" style={{width : "3rem"}} className="border-radius-lg shadow" />
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Ivanna</h6>
                                                        <p className="mb-0 text-xs">About files I can..</p>
                                                    </div>
                                                    <Link className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 text-design" to="javascript:;">Reply</Link>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                    <div className="avatar ms-3">
                                                        <img src={User4} alt="kal" style={{width : "3rem"}} className="border-radius-lg shadow" />
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Peterson</h6>
                                                        <p className="mb-0 text-xs">Have a great afternoon..</p>
                                                    </div>
                                                    <Link className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 text-design" to="javascript:;">Reply</Link>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0">
                                                    <div className="avatar ms-3">
                                                        <img src={User5} alt="kal" style={{width : "3rem"}} className="border-radius-lg shadow" />
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Nick Daniel</h6>
                                                        <p className="mb-0 text-xs">Hi! I need more information..</p>
                                                    </div>
                                                    <Link className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 text-design" to="javascript:;">Reply</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="mb-5 ps-3">
                                        <h6 className="mb-1 text-grey text-end">Projects</h6>
                                        <p className="text-sm text-grey">Architects design houses</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <Link className="d-block shadow-xl border-radius-xl">
                                                        <img src={Decor1} alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                    </Link>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Project #2</p>
                                                    <Link className='text-grey text-end text-decoration-none' to="javascript:;">
                                                        <h5>
                                                            Modern
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-4 text-grey text-sm">
                                                        As Uber works through a huge amount of internal management turmoil.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0 btn-pink">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" className='team' src={Team1} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" className='team' src={Team2} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" className='team' src={Team3} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" className='team' src={Team4} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <Link className="d-block shadow-xl border-radius-xl">
                                                        <img src={Decor2} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                    </Link>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Project #1</p>
                                                    <Link className='text-grey text-end text-decoration-none' to="javascript:;">
                                                        <h5>
                                                            Scandinavian
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-4 text-grey text-sm">
                                                        Music is something that every person has his or her own specific opinion about.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0 btn-pink">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" className='team' src={Team3} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" className='team' src={Team4} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" className='team' src={Team1} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" className='team' src={Team2} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <Link className="d-block shadow-xl border-radius-xl">
                                                        <img src={Decor3} alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                    </Link>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Project #3</p>
                                                    <Link className='text-grey text-end text-decoration-none' to="javascript:;">
                                                        <h5>
                                                            Minimalist
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-4 text-grey text-sm">
                                                        Different people have different taste, and various types of music.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0 btn-pink">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" className='team' src={Team4} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" className='team' src={Team3} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" className='team' src={Team2} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" className='team' src={Team1} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <Link className="d-block shadow-xl border-radius-xl">
                                                        <img src={Decor4} alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                    </Link>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Project #4</p>
                                                    <Link className='text-grey text-end text-decoration-none' to="javascript:;">
                                                        <h5>
                                                            Gothic
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-detail text-grey text-sm">
                                                        Why would anyone pick blue over pink? Pink is obviously a better color.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0 btn-pink">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" className='team' src={Team2} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" className='team' src={Team4} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" className='team' src={Team1} />
                                                            </Link>
                                                            <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" className='team' src={Team3} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile
