import React from "react";
import "../Styles/Cards.css";
import { cardsData } from "../TempData/Data";

import Card from "../Components/Card";

const Cards = () => {
  return (
    <>
    <h3>Analytics Report</h3>
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Cards;
