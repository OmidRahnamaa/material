import React from 'react';
import './Tran.css';
import ExpandUp from '../../assets/img/svgs/expand-up.svg';
import ExpandDown from '../../assets/img/svgs/expand-down.svg';
import DateIcon from '../../assets/img/svgs/date.svg';
import Exclamation from '../../assets/img/svgs/exclamation.svg';

const Tran = () => {
    const transactions = [
        {
          icon: ExpandDown,
          title: 'Netflix',
          date: '27 March 2020, at 12:30 PM',
          amount: '- $ 2,500',
          buttonClass: 'btn-outline-danger',
          amountClass: 'text-danger text-gradient',
        },
        {
          icon: ExpandUp,
          title: 'Apple',
          date: '27 March 2020, at 04:30 AM',
          amount: '+ $ 2,000',
          buttonClass: 'btn-outline-success',
          amountClass: 'text-success text-gradient',
        },
        {
          icon: ExpandUp,
          title: 'Stripe',
          date: '26 March 2020, at 13:45 PM',
          amount: '+ $ 750',
          buttonClass: 'btn-outline-success',
          amountClass: 'text-success text-gradient',
        },
        {
          icon: ExpandUp,
          title: 'HubSpot',
          date: '26 March 2020, at 12:30 PM',
          amount: '+ $ 1,000',
          buttonClass: 'btn-outline-success',
          amountClass: 'text-success text-gradient',
        },
        {
          icon: ExpandUp,
          title: 'Creative Tim',
          date: '26 March 2020, at 08:30 AM',
          amount: '+ $ 2,500',
          buttonClass: 'btn-outline-success',
          amountClass: 'text-success text-gradient',
        },
        {
          icon: Exclamation,
          title: 'Webflow',
          date: '26 March 2020, at 05:00 AM',
          amount: 'انتظار',
          buttonClass: 'btn-outline-dark',
          amountClass: 'text-grey',
        },
      ];
      

  return (
    <div className="col-md-5 mt-4">
      <div className="card h-100 mb-4">
        <div className="card-header pb-0 px-3">
          <div className="row">
            <div className="col-md-6">
              <h6 className="mb-0">معاملات شما</h6>
            </div>
            <div className="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
              <img src={DateIcon} alt="date" className="material-icons ms-2 text-lg" />
              <small>23 - 30 March 2020</small>
            </div>
          </div>
        </div>
        <div className="card-body pt-4 p-3">
          <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">جدیدترین</h6>
          <ul className="list-group">
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className="list-group-item mb-3 border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
              >
                <div className="d-flex align-items-center">
                  <button
                    className={`btn btn-icon-only btn-rounded ${transaction.buttonClass} mb-0 ms-3 p-2 btn-sm d-flex align-items-center justify-content-center`}
                  >
                    <img src={transaction.icon} alt="expand" className="material-icons text-lg" />
                  </button>
                  <div className="d-flex flex-column">
                    <h6 className="mb-1 text-grey text-sm">{transaction.title}</h6>
                    <span className="text-xs">{transaction.date}</span>
                  </div>
                </div>
                <div className={`d-flex align-items-center ${transaction.amountClass} text-sm font-weight-bold`}>
                  {transaction.amount}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tran;
