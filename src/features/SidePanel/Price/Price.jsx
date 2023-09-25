import React from "react";
import "./price.css";
import { Input } from "../../../shared/ui/Input/Input";

function Price({ handlePriceRangeChange }) {
  return (
    <>
      <p className="panelChoose__name">Цена</p>
      <div className="price">
        <Input
          type="number"
          id="minPrice"
          text="От"
          onChange={handlePriceRangeChange}
        />
        <Input
          type="number"
          id="maxPrice"
          text="До"
          onChange={handlePriceRangeChange}
        />
      </div>
    </>
  );
}

export default Price;
