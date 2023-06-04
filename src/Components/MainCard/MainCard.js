import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainCard.css'
import Ellipsis from '../../assets/img/svgs/ellipsis.svg'
import XD from "../../assets/img/small-logos/logo-xd.svg"
import Atlas from "../../assets/img/small-logos/logo-atlassian.svg"
import Slack from "../../assets/img/small-logos/logo-slack.svg"
import Spotify from "../../assets/img/small-logos/logo-spotify.svg"
import Jira from "../../assets/img/small-logos/logo-jira.svg"
import Invision from "../../assets/img/small-logos/logo-invision.svg"
import Team1 from '../../assets/img/team-1.jpg'
import Team2 from '../../assets/img/team-2.jpg'
import Team3 from '../../assets/img/team-3.jpg'
import Team4 from '../../assets/img/team-4.jpg'

class MainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenEllipsis: false,
        }
        this.toggleOpenEllipsis = this.toggleOpenEllipsis.bind(this)
    }

    toggleOpenEllipsis() {
        this.setState({ isOpenEllipsis: !this.state.isOpenEllipsis });
    }

    render() {

        const { isOpenEllipsis } = this.state

        return (
            <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                <div className="card">
                    <div className="card-header pb-0" style={{ height: '5rem' }}>
                        <div className="row">
                            <div className="col-lg-6 col-7" style={{ textAlign: "right" }}>
                                <h6>Projects</h6>
                                <p className="text-sm mb-0">
                                    <i className="fa fa-check text-info" aria-hidden="true"></i>
                                    <span className="font-weight-bold ms-1">30 done</span> this month
                                </p>
                            </div>
                            <div className="col-lg-6 col-5 my-auto text-start">
                                <div className={`dropdown float-lg-start ps-4 ${isOpenEllipsis ? 'menu-open' : ''}`}>
                                    <Link className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.toggleOpenEllipsis}>
                                        <img src={Ellipsis} className="ellipsis-v text-secondary" alt='ellipsis' />
                                    </Link>
                                    {isOpenEllipsis && (
                                        <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5 dropdown-table" aria-labelledby="dropdownTable">
                                            <li><Link className="dropdown-item border-radius-md" to="javascript:;">Action</Link></li>
                                            <li><Link className="dropdown-item border-radius-md" to="javascript:;">Another action</Link></li>
                                            <li><Link className="dropdown-item border-radius-md" to="javascript:;">Something else here</Link></li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body px-0 pb-2">
                        <div className="table-responsive">
                            <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src={XD} className="avatar avatar-sm ms-3" alt="xd" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Material XD Version</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                    <img className='team' src={Team1} alt="team1" />
                                                </Link>
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                    <img className='team' src={Team2} alt="team2" />
                                                </Link>
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                    <img className='team' src={Team3} alt="team3" />
                                                </Link>
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                    <img className='team' src={Team4} alt="team4" />
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $14,000 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">60%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src={Atlas} className="avatar avatar-sm ms-3" alt="atlas" />

                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Add Progress Track</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                <img className='team' src={Team2} alt="team5" />
                                                </Link>
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                <img className='team' src={Team4} alt="team6" />
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $3,000 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">10%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src={Slack} className="avatar avatar-sm ms-3" alt="slack" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Fix Platform Errors</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                <img className='team' src={Team1} alt="team8" />
                                                </Link>
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                <img className='team' src={Team3} alt="team9" />
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> Not set </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">100%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src={Spotify} className="avatar avatar-sm ms-3" alt="spotify" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Launch our Mobile App</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                <img className='team' src={Team4} alt="user1" />
                                                </Link>
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                <img className='team' src={Team2} alt="user2" />
                                                </Link>
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                <img className='team' src={Team1} alt="user3" />
                                                </Link>
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                <img className='team' src={Team3} alt="user4" />
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $20,500 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">100%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src={Jira} className="avatar avatar-sm ms-3" alt="jira" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Add the New Pricing Page</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                <img className='team' src={Team3} alt="user5" />
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $500 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">25%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex px-2 py-1">
                                                <div>
                                                    <img src={Invision} className="avatar avatar-sm ms-3" alt="invision" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="mb-0 text-sm">Redesign New Online Shop</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group mt-2">
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                <img className='team' src={Team4} alt="user6" />
                                                </Link>
                                                <Link to="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                <img className='team' src={Team1} alt="user7" />
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-sm">
                                            <span className="text-xs font-weight-bold"> $2,000 </span>
                                        </td>
                                        <td className="align-middle">
                                            <div className="progress-wrapper w-75 mx-auto">
                                                <div className="progress-info">
                                                    <div className="progress-percentage">
                                                        <span className="text-xs font-weight-bold">40%</span>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-gradient-info w-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainCard
