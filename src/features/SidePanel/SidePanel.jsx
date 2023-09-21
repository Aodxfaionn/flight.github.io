import React from "react";
import "./sidePanel.css";
import Sort from "./Sort/Sort";
import Filtr from "./Filtr/Filtr";
import Price from "./Price/Price";

function SidePanel() {
  return (
    <div class="panelChoose">
      <Sort />
      <Filtr />
      <Price />
    </div>
  );
}

export default SidePanel;
