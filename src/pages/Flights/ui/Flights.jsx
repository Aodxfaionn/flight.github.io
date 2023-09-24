import React from "react";
import "./flights.css";
import SidePanel from "../../../features/SidePanel/SidePanel";
import FlightList from "../../../widgets/FlightList/ui/FlightList";

function Flights() {
  return (
    <section className="flights">
      <SidePanel />
      <FlightList />
    </section>
  );
}

export default Flights;
