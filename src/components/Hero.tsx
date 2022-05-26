import React, { FC } from "react";
import { item } from "./data";

export const Hero = (item: item) => {
  let badge: any;
  // CORRECT THIS TYPE ANY!!!!!!!!!!!
  if (item.rating >= 8) {
    badge = <div className="award fa-solid fa-trophy"></div>;
    console.log(badge);
  }

  return (
    <div className="singlePiece">
      <img src={item.imageUrl} alt="itemUrl" />
      <div className="textContainer">
        <h3>
          {item.location}{" "}
          <a href={item.mapsLink} target="_blank">
            View on Google Maps
          </a>
          {badge}
        </h3>
        <h2>{item.title}</h2>
        <h4>
          {item.startDate} - {item.endDate}
        </h4>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
