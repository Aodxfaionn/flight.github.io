import React from "react";
import "./price.css";
import { Input } from "../../../shared/ui/Input/Input";

function Price() {
  return (
    <>
      <p class="panelChoose__name">Цена</p>
      <div class="price">
        <Input id="minPrice" text="От" />
        <Input id="maxPrice" text="До" />
      </div>
    </>
  );
}

export default Price;
