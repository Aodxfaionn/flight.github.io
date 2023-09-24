import React, { useState } from "react";
import "./sort.css";
import { RadioButton } from "../../../shared/ui/RadioButton/RadioButton";

function Sort() {
  const [sortType, setSortType] = useState("");
  return (
    <>
      <p className="panelChoose__name">Сортировать</p>
      <div className="sort">
        <RadioButton
          id="upPrice"
          name="sortList"
          value="upPrice"
          text="По возрастанию цены"
          onClick={() => setSortType("upPrice")}
        />
        <RadioButton
          id="downPrice"
          name="sortList"
          value="downPrice"
          text="По убыванию цены"
          onClick={() => setSortType("downPrice")}
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
