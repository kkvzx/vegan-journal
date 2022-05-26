import React from "react";
import { item } from "./data";

export const Hero = (item: item) => {
  return (
    <div className="singlePiece">
      <img src={item.imageUrl} alt="itemUrl" />
      <div className="textContainer">
        <h3>
          {item.location}{" "}
          <a href={item.mapsLink} target="_blank">
            View on Google Maps
          </a>
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
