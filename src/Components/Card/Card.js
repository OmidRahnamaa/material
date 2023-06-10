import React from 'react';
import './Card.css';
import Weekend from '../../assets/img/svgs/weeknd.svg';
import Person from '../../assets/img/svgs/person.svg';

const cardData = [
    {
      title: "Today's Money",
      amount: "$53k",
      icon: Weekend,
      headerClass: "bg-gradient-darkc",
      iconClass: "shadow-dark",
      changeColor: "success",
      changePercentage: "+55%",
      changeText: "than last week",
    },
    {
      title: "Today's Users",
      amount: "2,300",
      icon: Person,
      headerClass: "bg-gradient-primary",
      iconClass: "shadow-primary",
      changeColor: "success",
      changePercentage: "+3%",
      changeText: "than last month",
    },
    {
      title: "New Clients",
      amount: "3,462",
      icon: Person,
      headerClass: "bg-gradient-success",
      iconClass: "shadow-success",
      changeColor: "danger",
      changePercentage: "-2%",
      changeText: "than yesterday",
    },
    {
      title: "Sales",
      amount: "$103,430",
      icon: Weekend,
      headerClass: "bg-gradient-info",
      iconClass: "shadow-info",
      changeColor: "success",
      changePercentage: "+5%",
      changeText: "than yesterday",
    },
  ];
  

const Card = () => {
  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4" key={index}>
          <div className="card">
            <div className={`card-header p-3 pt-2 `}>
              <div className={`icon icon-lg icon-shape ${card.iconClass} ${card.headerClass} text-center border-radius-xl mt-n4 position-absolute`}>
                <img src={card.icon} className="card-logo" alt="Card Icon" />
              </div>
              <div className="text-start pt-1">
                <p className="text-sm mb-0c text-capitalize">{card.title}</p>
                <h4 className="mb-0c">{card.amount}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              <p className="mb-0c">
                <span className={`text-${card.changeColor} text-sm font-weight-bolder`}>
                  {card.changePercentage}
                </span>
                {card.changeText}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
