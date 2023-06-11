import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreditCard.css';
import Tree from '../../assets/img/illustrations/pattern-tree.svg';
import Wifi from '../../assets/img/svgs/wifi.svg';
import MasterCard from '../../assets/img/logos/mastercard.png';
import Visa from '../../assets/img/logos/visa.png';
import Bank from '../../assets/img/svgs/bank.svg';
import Wallet from '../../assets/img/svgs/wallet.svg';
import Add from '../../assets/img/svgs/add.svg';
import Edit from '../../assets/img/svgs/edit.svg';

const CreditCard = () => {
  const [creditCards, setCreditCards] = useState([
    {
      id: 1,
      type: 'MasterCard',
      number: '**** **** **** 7852',
      cardHolder: 'Jack Peterson',
      expires: '11/22',
    },
    {
      id: 2,
      type: 'Visa',
      number: '**** **** **** 5248',
      cardHolder: 'John Doe',
      expires: '10/24',
    },
  ]);

  const [bankAccount, setBankAccount] = useState({
    name: 'Belong Interactive',
    balance: '+$2000',
  });

  const [paypalAccount, setPaypalAccount] = useState({
    name: 'Freelance Payment',
    balance: '$455.00',
  });

  return (
    <div className="col-lg-8">
      <div className="row">
        <div className="col-xl-6 mb-xl-0 mb-4" style={{ height: '13.94rem' }}>
          <div className="card bg-black shadow-xl">
            <div className="overflow-hidden position-relative border-radius-xl">
              <img
                src={Tree}
                className="position-absolute opacity-2 start-0 top-0 w-100 z-index-1 h-100"
                alt="pattern-tree"
              />
              <span className="mask bg-gradient-dark opacity-10"></span>
              <div
                className="card-body position-relative z-index-1 p-3"
                style={{ textAlign: 'right' }}
              >
                <img
                  src={Wifi}
                  className="material-icons text-white p-2"
                  style={{ width: '2rem' }}
                  alt="wifi"
                />
                <h5 className="text-white mt-4 mb-5 pb-2">{creditCards[0].number}</h5>
                <div className="d-flex">
                  <div className="d-flex">
                    <div className="ms-4">
                      <p className="text-white text-sm opacity-8 mb-0">Card Holder</p>
                      <h6 className="text-white mb-0">{creditCards[0].cardHolder}</h6>
                    </div>
                    <div>
                      <p className="text-white text-sm opacity-8 mb-0">Expires</p>
                      <h6 className="text-white mb-0">{creditCards[0].expires}</h6>
                    </div>
                  </div>
                  <div
                    className="ms-auto w-20 d-flex align-items-end justify-content-end"
                    style={{ width: '44%' }}
                  >
                    <img
                      className="w-60 mt-2"
                      src={MasterCard}
                      alt="logo"
                      style={{ width: '30%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row">
            <div className="col-md-6 col-6">
              <div className="card">
                <div
                  className="card-header mx-4 p-3 text-center"
                  style={{ alignSelf: 'center' }}
                >
                  <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                    <img src={Bank} className="material-icons bank-logo opacity-10" alt="bank" />
                  </div>
                </div>
                <div className="card-body pt-1 p-3 text-center">
                  <h6 className="text-center mb-0">{bankAccount.name}</h6>
                  <hr className="horizontal dark my-3" />
                  <h5 className="mb-0 bank-align">{bankAccount.balance}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="card">
                <div
                  className="card-header mx-4 p-3 text-center"
                  style={{ alignSelf: 'center' }}
                >
                  <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                    <img src={Wallet} className="material-icons bank-logo opacity-10" alt="wallet" />
                  </div>
                </div>
                <div className="card-body pt-1 p-3 text-center">
                  <h6 className="text-center mb-0">{paypalAccount.name}</h6>
                  <hr className="horizontal dark my-3" />
                  <h5 className="mb-0 bank-align">{paypalAccount.balance}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-lg-0 mb-4">
          <div className="card mt-3">
            <div className="card-header invoice pb-0 p-3">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Payment Method</h6>
                </div>
                <div className="col-6 text-start">
                  <Link className="btn bg-gradient-dark new-card mb-0" to="#">
                    <img src={Add} className="material-icons add-detail text-sm" alt="add" />
                    &nbsp;&nbsp;Add New Card
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <div className="row">
                {creditCards.map((card) => (
                  <div className="col-md-6 mb-md-0 mb-4" key={card.id}>
                    <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                      <img
                        className="w-10 ms-3 mb-0 mastervisa"
                        src={card.type === 'MasterCard' ? MasterCard : Visa}
                        alt="logo"
                      />
                      <h6 className="mb-0">{card.number}</h6>
                      <img
                        src={Edit}
                        className="material-icons ms-auto text-dark edit cursor-pointer"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit Card"
                        alt="edit"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
