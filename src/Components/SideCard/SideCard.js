import React from 'react'
import './SideCard.css'
import ArrowUp from '../../assets/img/svgs/arrowup.svg'
import Bell2 from '../../assets/img/svgs/bell2.svg'
import Code from '../../assets/img/svgs/code.svg'
import ShoppingCart from '../../assets/img/svgs/shoppingcart.svg'
import CreditCard2 from '../../assets/img/svgs/creditcard2.svg'
import Key from '../../assets/img/svgs/key.svg'
import Payment from '../../assets/img/svgs/payment.svg'

const SideCard = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card h-100">
                <div className="card-header pb-0">
                    <h6 style={{ textAlign: 'right' }}>Orders overview</h6>
                    <p className="text-sm">
                        <img src={ArrowUp} className='side-logo' alt='arrowup'/>
                        <span className="font-weight-bold">24%</span> this month
                    </p>
                </div>
                <div className="card-body p-3">
                    <div className="timeline timeline-one-side">
                        <div className="timeline-block mb-3">
                            <img src={Bell2} className="material-icons text-success text-gradient" alt='bell'/>
                            <div className="timeline-content">
                                <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                            </div>
                        </div>
                        <div className="timeline-block mb-3">
                            <img src={Code} className="material-icons text-danger text-gradient" alt='code'/>
                            <div className="timeline-content">
                                <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                            </div>
                        </div>
                        <div className="timeline-block mb-3">
                                <img src={ShoppingCart} className="material-icons text-info text-gradient" alt='shopping' />
                            <div className="timeline-content">
                                <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                            </div>
                        </div>
                        <div className="timeline-block mb-3">
                            <span className="timeline-step">
                                <img src={CreditCard2} className="material-icons text-warning text-gradient" alt='credit card' />
                            </span>
                            <div className="timeline-content">
                                <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                            </div>
                        </div>
                        <div className="timeline-block mb-3">
                            <span className="timeline-step">
                                <img src={Key} className="material-icons text-primary text-gradient" alt='key' />
                            </span>
                            <div className="timeline-content">
                                <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                            </div>
                        </div>
                        <div className="timeline-block">
                            <span className="timeline-step">
                                <img src={Payment} className="material-icons text-dark text-gradient" alt='payment' />
                            </span>
                            <div className="timeline-content">
                                <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCard
