import React from 'react';
import Card from './Card';
import Weekend from '../../assets/img/svgs/weeknd.svg';
import Person from '../../assets/img/svgs/person.svg';

const CardList = () => {
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
    // Add more card objects as needed
  ];

  return (
    <div>
      <Card cards={cardData} />
    </div>
  );
};

export default CardList;
