import React from "react";
import "./filtr.css";
import { Checkbox } from "../../../shared/ui/Checkbox/Checkbox";

function Filtr({ handleCategoryChange }) {
  return (
    <>
      <p className="panelChoose__name">Фильтровать</p>
      <div className="filtr">
        <Checkbox
          id="without"
          name="transfer"
          value="without"
          text="Без пересадки"
          onChange={handleCategoryChange}
        />
        <Checkbox
          id="one"
          name="transfer"
          value="one"
          text="1 пересадка"
          onChange={handleCategoryChange}
        />
      </div>
    </>
  );
}

export default Filtr;
