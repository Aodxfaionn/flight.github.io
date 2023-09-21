import React from "react";
import "./filtr.css";
import { Checkbox } from "../../../shared/ui/Checkbox/Checkbox";

function Filtr() {
  return (
    <>
      <p class="panelChoose__name">Фильтровать</p>
      <div class="filtr">
        <Checkbox
          id="without"
          name="without"
          value="transfer"
          text="Без пересадки"
        />
        <Checkbox id="one" name="one" value="transfer" text="1 пересадка" />
      </div>
    </>
  );
}

export default Filtr;
