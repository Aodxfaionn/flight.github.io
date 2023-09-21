import React from "react";
import "./index.css";
import Header from "../widgets/Header/ui/Header";
import Footer from "../widgets/Footer/ui/Footer";
import Flights from "../pages/Flights/ui/Flights";

function App() {
  return (
    <div className="app">
      <Header />
      <Flights />
      <Footer />
    </div>
  );
}

export default App;
