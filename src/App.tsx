import * as React from "react";
import "./styles.css";
import Navbar from "./components/Navbar.tsx";
import FooterPage from "./components/FooterPage.tsx";
import Features from "./components/Features.tsx";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>
        The Staff Covid-19 Media Project collects and publishes the most
        complete testing data available for Canada and territories.
      </h1>
      <Features />
      <FooterPage />
    </div>
  );
}
