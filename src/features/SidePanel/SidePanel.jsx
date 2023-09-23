import React from "react";
import "./sidePanel.css";
import Sort from "./Sort/Sort";
import Filtr from "./Filtr/Filtr";
import Price from "./Price/Price";
import AviaCompany from "./AviaCompany/Aviacompany";

function SidePanel() {
  return (
    <div className="panelChoose">
      <Sort />
      <Filtr />
      <Price />
      <AviaCompany />
    </div>
  );
}

export default SidePanel;
