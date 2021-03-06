import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecapVoyage from "../components/RecapVoyage";
import VehiculesCards from "../components/VehiculesCards";

export default function Reservation2() {
  return (
    <div>
      <Navbar />
      <div className="containerRes">
        <RecapVoyage />
        <VehiculesCards />
      </div>
      <Footer />
    </div>
  );
}
