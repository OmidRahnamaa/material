import React from 'react'
import './SideCard.css'
import ArrowUp from '../../assets/img/svgs/arrowup.svg'

const SideCard = () => {
    const items = [
        {
            icon: require('../../assets/img/svgs/bell2.svg').default,
            alt: 'bell',
            title: '$2400, Design changes',
            date: '22 DEC 7:20 PM',
            color: 'success'
        },
        {
            icon: require('../../assets/img/svgs/code.svg').default,
            alt: 'code',
            title: 'New order #1832412',
            date: '21 DEC 11 PM',
            color: 'danger'
        },
        {
            icon: require('../../assets/img/svgs/shoppingcart.svg').default,
            alt: 'shopping',
            title: 'Server payments for April',
            date: '21 DEC 9:34 PM',
            color: 'info'
        },
        {
            icon: require('../../assets/img/svgs/creditcard2.svg').default,
            alt: 'credit card',
            title: 'New card added for order #4395133',
            date: '20 DEC 2:20 AM',
            color: 'warning'
        },
        {
            icon: require('../../assets/img/svgs/key.svg').default,
            alt: 'key',
            title: 'Unlock packages for development',
            date: '18 DEC 4:54 AM',
            color: 'primary'
        },
        {
            icon: require('../../assets/img/svgs/payment.svg').default,
            alt: 'payment',
            title: 'New order #9583120',
            date: '17 DEC',
            color: 'grey'
        },
    ]

    return (
        <div className="col-lg-4 col-md-6">
            <div className="card h-100">
                <div className="card-header pb-0 mb-4">
                    <h6 style={{ textAlign: 'right' }}>Orders overview</h6>
                    <p className="text-sm">
                        <img src={ArrowUp} className="side-logo" alt="arrowup" />
                        <span className="font-weight-bold">24%</span> this month
                    </p>
                </div>
                <div className="card-body" style={{ padding: '0.75rem' }}>
                    <div className="timeline timeline-one-side">
                        {items.map((item, index) => (
                            <div className="timeline-block mb-4" key={index}>
                                <img
                                    src={item.icon}
                                    className={`material-icons text-${item.color} text-gradient`}
                                    alt={item.alt}
                                />
                                <div className="timeline-content">
                                    <h6 className="text-grey text-sm font-weight-bold mb-0">{item.title}</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCard
