import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import data from "./components/data";
import "./App.css";

export const WholePage = () => {
  const heroEl = data.map((item) => {
    return <Hero key={item.id} {...item} />;
  });

  return (
    <div className="pagePositioningContainer">
      <div className="pageContainer">
        <Navbar />
        <div className="heroContainer">{heroEl}</div>
      </div>
    </div>
  );
};
