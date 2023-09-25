import React from "react";
import "./flights.css";
import SidePanel from "../../../features/SidePanel/SidePanel";
import FlightList from "../../../widgets/FlightList/ui/FlightList";
import json from "../../../app/flights.json";
import { useFiltrSort } from "../lib/useFiltrSort";

function Flights() {
  const data = json.result.flights;
  const [
    handleSortChange,
    handlePriceRangeChange,
    handleCategoryChange,
    filteredFlights,
  ] = useFiltrSort(data);
  return (
    <section className="flights">
      <SidePanel
        handleSortChange={handleSortChange}
        handlePriceRangeChange={handlePriceRangeChange}
        handleCategoryChange={handleCategoryChange}
      />
      <FlightList list={filteredFlights} />
    </section>
  );
}

export default Flights;
