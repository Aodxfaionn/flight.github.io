import React, { useState } from "react";
import "./sidePanel.css";
import Sort from "./Sort/Sort";
import Filtr from "./Filtr/Filtr";
import Price from "./Price/Price";
import AviaCompany from "./AviaCompany/ui/Aviacompany";

function SidePanel({ handleSortChange, handlePriceRangeChange, handleCategoryChange }) {
  return (
    <div className="panelChoose">
      <Sort handleSortChange={handleSortChange} />
      <Filtr handleCategoryChange={handleCategoryChange} />
      <Price handlePriceRangeChange={handlePriceRangeChange} />
      <AviaCompany handleCategoryChange={handleCategoryChange}/>
    </div>
  );
}

export default SidePanel;
