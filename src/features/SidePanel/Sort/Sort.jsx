import React from "react";
import "./sort.css";
import { RadioButton } from "../../../shared/ui/RadioButton/RadioButton";

function Sort() {
  return (
    <>
      <p class="panelChoose__name">Сортировать</p>
      <div class="sort">
        <RadioButton
          id="upPrice"
          name="sortList"
          value="upPrice"
          text="По возрастанию цены"
        />
        <RadioButton
          id="downPrice"
          name="sortList"
          value="downPrice"
          text="По убыванию цены"
        />
        <RadioButton
          id="time"
          name="sortList"
          value="time"
          text="По времени в пути"
        />
      </div>
    </>
  );
}

export default Sort;
