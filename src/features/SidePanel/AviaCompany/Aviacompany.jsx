import React from "react";
import "./aviaCompany.css";
import { Checkbox } from "../../../shared/ui/Checkbox/Checkbox";
import data from "../../../app/flights.json";

function AviaCompany() {
  const flights = data.result.flights;
  const companyList = [];
  let obj;
  flights.map(
    (flight) => (
      (obj = {}),
      (obj.name = flight.flight.carrier.caption),
      (obj.code = flight.flight.carrier.airlineCode),
      (obj.price = flight.flight.price.total.amount),
      companyList.push(obj)
    )
  );
  companyList.sort((a, b) => b.price - a.price);
  let unicCompany = [
    ...new Map(
      companyList.map((company) => [company["name"], company])
    ).values(),
  ];

  return (
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
  );
}

export default AviaCompany;
