import React from 'react';
import './Invoices.css';
import { Link } from 'react-router-dom';
import PDF from '../../assets/img/svgs/pdf.svg';

const invoicesData = [
  {
    date: 'March, 01, 2020',
    number: '#MS-415646',
    amount: 180,
  },
  {
    date: 'February, 10, 2021',
    number: '#RV-126749',
    amount: 250,
  },
  {
    date: 'April, 05, 2020',
    number: '#FB-212562',
    amount: 560,
  },
  {
    date: 'June, 25, 2019',
    number: '#QW-103578',
    amount: 120,
  },
  {
    date: 'March, 01, 2019',
    number: '#AR-803481',
    amount: 300,
  },
];

const Invoices = () => {
  return (
    <div className="col-lg-4">
      <div className="card h-100">
        <div className="card-header invoice pb-0 p-3">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <h6 className="mb-0">فاکتورها</h6>
            </div>
            <div className="col-6 text-start">
              <button className="btn btn-nav btn-sm mb-0">مشاهده همه</button>
            </div>
          </div>
        </div>
        <div className="card-body p-3 pb-0">
          <ul className="list-group">
            {invoicesData.map((invoice, index) => (
              <li
                key={index}
                className={`list-group-item border-0 d-flex justify-content-between invc ps-0 mb-2 border-radius-lg`}
              >
                <div className="d-flex flex-column">
                  <h6 className="mb-1 text-grey font-weight-bold text-sm">
                    {invoice.date}
                  </h6>
                  <span className="text-xs">{invoice.number}</span>
                </div>
                <div className="d-flex align-items-center text-sm">
                  ${invoice.amount}
                  <button className="btn btn-link text-dark text-sm mb-0 px-0 me-4">
                    <img
                      src={PDF}
                      className="material-icons text-lg position-relative me-1"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
