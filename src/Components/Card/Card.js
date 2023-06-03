import React from 'react'
import './Card.css'
import Weekend from '../../assets/img/svgs/weeknd.svg';
import Person from '../../assets/img/svgs/person.svg';


const Card = () => {
    return (
        <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                        <div className="icon icon-lg icon-shape bg-gradient-darkc shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                            <img src={Weekend} className="card-logo" />
                        </div>
                        <div className="text-start pt-1">
                            <p className="text-sm mb-0c text-capitalize">Today's Money</p>
                            <h4 className="mb-0c">$53k</h4>
                        </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-3">
                        <p className="mb-0c"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                        <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                            <img src={Person} className="card-logo" />
                        </div>
                        <div className="text-end pt-1">
                            <p className="text-sm mb-0c text-capitalize">Today's Users</p>
                            <h4 className="mb-0c">2,300</h4>
                        </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-3">
                        <p className="mb-0c"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                        <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                            <img src={Person} className="card-logo" />
                        </div>
                        <div className="text-end pt-1">
                            <p className="text-sm mb-0c text-capitalize">New Clients</p>
                            <h4 className="mb-0c">3,462</h4>
                        </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-3">
                        <p className="mb-0c"><span className="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                        <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                            <img src={Weekend} className="card-logo" />
                        </div>
                        <div className="text-end pt-1">
                            <p className="text-sm mb-0c text-capitalize">Sales</p>
                            <h4 className="mb-0c">$103,430</h4>
                        </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-3">
                        <p className="mb-0c"><span className="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
