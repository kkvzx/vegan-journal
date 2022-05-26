import React from "react";
import { item } from "./data";

export const Hero = (item: item) => {
  let award: boolean;
  item.rating >= 8 ? (award = true) : (award = false);

  return (
    <div className="singlePiece">
      <img src={item.imageUrl} alt="itemUrl" />
      <div className="textContainer">
        <h3>
          {item.location}{" "}
          <a href={item.mapsLink} target="_blank">
            View on Google Maps
          </a>
          <div className="award">
            <i className="fa-solid fa-earth-europe"></i>
          </div>
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
