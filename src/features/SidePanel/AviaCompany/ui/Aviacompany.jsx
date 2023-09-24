import React from "react";
import "./aviaCompany.css";
import { Checkbox } from "../../../../shared/ui/Checkbox/Checkbox";
import data from "../../../../app/flights.json";
import { useMadeUnicList } from "./lib/useMadeUnicList";

function AviaCompany() {
  const unicCompany = useMadeUnicList(data.result.flights);

  return (
    <>
      <p className="panelChoose__name">Авиакомпании</p>
      <div className="aviaCompany">
        {unicCompany.map((company, num) => (
          <div key={num} className="aviaCompany__one">
            <Checkbox
              id={company.code}
              name="aviaCompany"
              value={company.code}
              text={company.name}
            />
            <span className="aviaCompany__price">От {company.price} Р</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default AviaCompany;
